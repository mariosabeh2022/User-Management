import React from "react";
import { InputProps } from "./Input.type";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, onChange, onBlur, name, value }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      />
    );
  }
);

export default Input;
