interface UserInitialProps {
    firstName:string;
    lastName?:string;
}
  
const UserInitial=({ firstName, lastName }:UserInitialProps) => {
    return(
        <div className="px-6 py-2 flex justify-center items-center">
            <span className="bg-[var(--color-primary)] w-16 h-16 flex items-center justify-center text-white text-xl font-semibold border rounded-full">
                {firstName.charAt(0).toUpperCase()}{lastName?.charAt(0).toUpperCase()}
            </span>
      </div>
    )
}
export default UserInitial;
