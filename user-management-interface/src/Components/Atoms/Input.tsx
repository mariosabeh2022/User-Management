import { ChangeEvent } from "react";

interface InputProps{
    type:string;
    className:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
  }
const Input=({type,className,onChange}:InputProps)=>{
    return (
        <input type={type}
               className={className}
               onChange={onChange}
        />
    )
}
export default Input