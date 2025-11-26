import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-8 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base tracking-wide flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#FF7A00] hover:bg-[#E66E00] text-white shadow-lg shadow-orange-500/20",
    outline: "border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white",
    whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;