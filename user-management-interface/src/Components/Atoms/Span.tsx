interface SpanPorps{
  className:string;
  label:string
}

const Span=({className,label}:SpanPorps)=>{
  return (
    <span className={className}>
        {label}
    </span>
  )
}
export default Span
