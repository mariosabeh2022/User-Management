import { ButtonProps } from "./Button.type";
const Button = ({ disabled, className, label }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
