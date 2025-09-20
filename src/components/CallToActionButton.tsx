import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Using shadcn Button

interface CallToActionButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}
const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  to,
  href,
  onClick,
  variant,
  children,
  className = '',
  type = "button"
}) => {
  const primaryClasses = "bg-accent text-white hover:bg-accent/90"; // Orange with white text for contrast
  const secondaryClasses = "bg-primary text-white hover:bg-primary/90"; // Main blue with white text for contrast
  const buttonClasses = `px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-300 ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;
  if (to) {
    return <Link to={to} className={buttonClasses}>
        {children}
      </Link>;
  }
  if (href) {
    return;
  }
  return <Button type={type} onClick={onClick} className={buttonClasses} variant={variant === 'primary' ? 'default' : 'outline'}>
      {children}
    </Button>;
};
export default CallToActionButton;