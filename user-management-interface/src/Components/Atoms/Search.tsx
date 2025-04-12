import {SearchType} from './Search.type'
const Search:React.FC<SearchType>=({onBlur})=>{
    return (
        <input type="text"
               className="mt-8 ml-8 text-black px-4 py-2 border border-gray-300 rounded-sm"
               placeholder="Search users..."
               onBlur={onBlur}
        />
    )
}
export default Search