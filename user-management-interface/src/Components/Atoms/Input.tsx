interface InputProps{
    type:string;
    className:string;
  }
const Input=({type,className}:InputProps)=>{
    return (
        <input type={type}
               className={className}
        />
    )
}
export default Input