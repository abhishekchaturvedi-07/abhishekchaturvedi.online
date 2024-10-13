import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${className} flex items-center p-3 border rounded-lg border-orange-600 text-white-100 hover:bg-orange-300 hover:text-amber-900`}
      {...props}
    >
      {children}
    </button>
  );
};
