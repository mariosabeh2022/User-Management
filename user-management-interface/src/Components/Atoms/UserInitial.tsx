interface UserInitialProps {
    FirstName: string;
    LastName?: string;
  }
  
const UserInitial=({ FirstName, LastName }:UserInitialProps) => {
    return(
        <div className="px-6 py-2 flex justify-center items-center">
            <span className="bg-[#3251D0] w-16 h-16 flex items-center justify-center text-white text-xl font-semibold border rounded-full">
                {FirstName.charAt(0).toUpperCase()}{LastName?.charAt(0).toUpperCase()}
            </span>
      </div>
    )
}
export default UserInitial;
