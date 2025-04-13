import { SpanPorps } from "./Span.type"

const Span=({className,label}:SpanPorps)=>{
  return (
    <span className={className}>
        {label}
    </span>
  )
}
export default Span
