interface ButtonProps{
  className:string,
  label:string,
}

const Button=({className,label}:ButtonProps)=>{
  return (
    <button className={className}>{label}</button>
  )
}
export default Button
  