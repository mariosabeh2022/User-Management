type H1={
    label:string
}

const H1:React.FC<H1> = ({label}) => {
  return (
    <h1 className="px-5 py-5 text-white font-semibold">{label}</h1>
  )
}

export default H1
