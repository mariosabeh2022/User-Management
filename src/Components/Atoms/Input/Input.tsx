import { InputProps } from "./Input.type"
const Input=({type,className,onChange}:InputProps)=>{
    return (
        <input type={type}
               className={className}
               onChange={onChange}
        />
    )
}
export default Input