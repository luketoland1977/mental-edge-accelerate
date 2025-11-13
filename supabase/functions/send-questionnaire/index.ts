import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuestionnaireData {
  name: string;
  email: string;
  phone?: string;
  comment?: string;
  effort_score: number;
  thought_score: number;
  attitude_score: number;
  total_score: number;
  effort_responses: Record<string, number>;
  thought_responses: Record<string, number>;
  attitude_responses: Record<string, number>;
  profile_responses: Record<string, string>;
  submission_time?: number;
}

// In-memory rate limiting (resets when function restarts)
const submissionTracker = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_SUBMISSIONS_PER_HOUR = 3;

// Input validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email) && email.length <= 255;
}

function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  return nameRegex.test(name) && name.length > 0 && name.length <= 100;
}

function validatePhone(phone: string | undefined): boolean {
  if (!phone) return true; // Optional field
  const phoneRegex = /^[0-9\s\-\(\)\+]+$/;
  return phoneRegex.test(phone) && phone.length <= 20;
}

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const submissions = submissionTracker.get(identifier) || [];
  
  // Remove old submissions outside the time window
  const recentSubmissions = submissions.filter(
    time => now - time < RATE_LIMIT_WINDOW
  );
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    return false; // Rate limit exceeded
  }
  
  // Add current submission
  recentSubmissions.push(now);
  submissionTracker.set(identifier, recentSubmissions);
  
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: QuestionnaireData = await req.json();
    
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    console.log("Received questionnaire submission from IP:", clientIP);
    
    // Rate limiting check
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Too many submissions. Please try again later." 
        }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json", 
            ...corsHeaders 
          },
        }
      );
    }
    
    // Server-side input validation
    if (!validateName(data.name)) {
      throw new Error("Invalid name format");
    }
    
    if (!validateEmail(data.email)) {
      throw new Error("Invalid email format");
    }
    
    if (!validatePhone(data.phone)) {
      throw new Error("Invalid phone number format");
    }
    
    // Validate comment length
    if (data.comment && data.comment.length > 2000) {
      throw new Error("Comment is too long");
    }
    
    // Validate scores are within expected range
    if (data.effort_score < 0 || data.effort_score > 25 ||
        data.thought_score < 0 || data.thought_score > 25 ||
        data.attitude_score < 0 || data.attitude_score > 25) {
      throw new Error("Invalid scores detected");
    }
    
    // Validate profile responses length
    for (const response of Object.values(data.profile_responses)) {
      if (response.length > 1000) {
        throw new Error("Profile response is too long");
      }
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Trim and sanitize inputs
    const sanitizedData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.trim() || null,
      comment: data.comment?.trim() || null,
      effort_score: data.effort_score,
      thought_score: data.thought_score,
      attitude_score: data.attitude_score,
      total_score: data.total_score,
      effort_responses: data.effort_responses,
      thought_responses: data.thought_responses,
      attitude_responses: data.attitude_responses,
      profile_responses: data.profile_responses,
    };

    // Save to database
    const { data: dbData, error: dbError } = await supabase
      .from("questionnaire_responses")
      .insert(sanitizedData)
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save to database: ${dbError.message}`);
    }

    console.log("Saved to database with ID:", dbData.id);

    // Format email content
    const effortQuestions = [
      "I give full effort in practices, not just in games.",
      "I push myself even when I feel tired, frustrated, or behind.",
      "I hold myself accountable when I fall short of a goal.",
      "I train or prepare even when no one is watching.",
      "I consistently aim to improve, even if I'm already performing well."
    ];

    const thoughtQuestions = [
      "I stay focused and present under pressure.",
      "I recover quickly after mistakes or losses.",
      "I use positive self-talk to manage nerves or fear.",
      "I visualize success before competitions or big moments.",
      "I actively work on improving my mental game."
    ];

    const attitudeQuestions = [
      "I view failure as feedback, not a reason to quit.",
      "I welcome tough coaching or correction.",
      "I lead by example with my mindset and body language.",
      "I stay mentally engaged, even when things aren't going my way.",
      "I believe I can grow and develop with effort and time."
    ];

    const profileQuestions = [
      "Describe yourself as a player in your sport. What are your strengths? What role do you play on your team or in competition?",
      "How would teammates or coaches describe your mindset under pressure? Think about game-time, practice, or moments when things didn't go your way.",
      "Describe who you are off the court/field/etc. — outside of your sport. What matters to you? How do you carry yourself in school, work, or life?",
      "What mental or emotional habits do you want to improve the most? (Examples: focus, confidence, bouncing back from mistakes, leadership, etc.)",
      "Why do you want to strengthen your mindset right now? What's driving you to improve? Any big goals or challenges ahead?"
    ];

    const effortResponsesHtml = Object.entries(data.effort_responses)
      .map(([key, value], idx) => `<li><strong>Q${idx + 1}:</strong> ${effortQuestions[idx]}<br/><strong>Response:</strong> ${value}/5</li>`)
      .join("");

    const thoughtResponsesHtml = Object.entries(data.thought_responses)
      .map(([key, value], idx) => `<li><strong>Q${idx + 1}:</strong> ${thoughtQuestions[idx]}<br/><strong>Response:</strong> ${value}/5</li>`)
      .join("");

    const attitudeResponsesHtml = Object.entries(data.attitude_responses)
      .map(([key, value], idx) => `<li><strong>Q${idx + 1}:</strong> ${attitudeQuestions[idx]}<br/><strong>Response:</strong> ${value}/5</li>`)
      .join("");

    const profileResponsesHtml = Object.entries(data.profile_responses)
      .map(([key, value], idx) => {
        const sanitizedValue = String(value).substring(0, 1000); // Truncate for safety
        return `<div style="margin-bottom: 20px;"><strong>Q${idx + 16}:</strong> ${profileQuestions[idx]}<br/><strong>Response:</strong> ${sanitizedValue}</div>`;
      })
      .join("");

    const emailHtml = `
      <h1>New CCMG Questionnaire Submission</h1>
      
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Name:</strong> ${sanitizedData.name}</li>
        <li><strong>Email:</strong> ${sanitizedData.email}</li>
        <li><strong>Phone:</strong> ${sanitizedData.phone || "Not provided"}</li>
        <li><strong>Comments:</strong> ${sanitizedData.comment || "None"}</li>
      </ul>

      <h2>Score Summary</h2>
      <ul>
        <li><strong>Effort Score:</strong> ${data.effort_score}/25</li>
        <li><strong>Thought Score:</strong> ${data.thought_score}/25</li>
        <li><strong>Attitude Score:</strong> ${data.attitude_score}/25</li>
        <li><strong>Total Score:</strong> ${data.total_score}/75</li>
      </ul>

      <h2>Section 1: Effort Responses</h2>
      <ol>${effortResponsesHtml}</ol>

      <h2>Section 2: Thought Responses</h2>
      <ol>${thoughtResponsesHtml}</ol>

      <h2>Section 3: Attitude Responses</h2>
      <ol>${attitudeResponsesHtml}</ol>

      <h2>Player Profile — Reflection</h2>
      ${profileResponsesHtml}

      <hr/>
      <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
      <p style="color: #666; font-size: 12px;">Client IP: ${clientIP}</p>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Mental Lab <onboarding@resend.dev>",
      to: ["coachjason@mentallab.net"],
      subject: `New Questionnaire Submission from ${sanitizedData.name}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Questionnaire submitted successfully",
        id: dbData.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-questionnaire function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to submit questionnaire" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
