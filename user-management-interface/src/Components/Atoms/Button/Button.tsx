import { ButtonProps } from "./Button.type"
const Button=({className,label}:ButtonProps)=>{
  return (
    <button className={`cursor-pointer ${className}`}>{label}</button>
  )
}
export default Button
  