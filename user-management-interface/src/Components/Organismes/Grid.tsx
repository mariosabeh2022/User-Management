type Grid={
    children:React.ReactNode
}

const Grid:React.FC<Grid>=({children})=>{

    return(
        <div className="m-8 grid gap-4 max-w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {children}
        </div>
    )
}
export default Grid;
