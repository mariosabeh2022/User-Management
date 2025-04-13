import UserCard from "../Molecules/UserCard/UserCard";
import { Status } from "../Molecules/UserCard";
import Search from "../Atoms/Search/Search";
import { useState, ChangeEvent } from "react";
import LoadingPage from "../Pages/LoadingPage";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useThemeStore } from "../../store/theme/ThemeStore";

const Grid = () => {
  const { data: allUsers, fetching: fetchingAll } = useFetchUsers();
  const { users: searchedUsers, fetching: fetchingSearch, fetchUser } = useFetchUser();

  const [searchMessage, setSearchMessage] = useState("");

  const isSearching = searchMessage.trim().length > 0;
  const displayedUsers = isSearching ? searchedUsers : allUsers;
  const isLoading = isSearching ? fetchingSearch : fetchingAll;

  const lightTheme = useThemeStore((state)=>state.lightTheme)
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const keyword=e.target.value;
    setSearchMessage(keyword);
    if(keyword.trim()!==""){
      fetchUser(keyword)
    }
  }
  if (isLoading) return <LoadingPage />;
  else
    return (
      <div className={`${lightTheme?'bg-white':'bg-gray-500'}`}>
        <Search onBlur={handleChange}/>
        <div className="m-8 grid gap-4 max-w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedUsers.map((user) => (
            <UserCard
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              status={user.status as Status}
              dob={new Date(user.dateOfBirth)}
            />
          ))}
        </div>
      </div>
    );
};
export default Grid;
