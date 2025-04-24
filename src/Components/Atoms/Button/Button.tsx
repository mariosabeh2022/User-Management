import { ButtonProps } from "./Button.type";
const Button = ({ disabled, className, label, onClick }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
