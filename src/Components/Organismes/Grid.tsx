import UserCard from "../Molecules/UserCard/UserCard";
import Search from "../Atoms/Search/Search";
import { useState, ChangeEvent, useRef } from "react";
import LoadingPage from "../Pages/LoadingPage";
import getUsers from "../../hooks/getUsers";
import { useQuery } from "@tanstack/react-query";
import { useThemeStore } from "../../store/theme/themeStore";
import { useSessionStore } from "../../store/session/sessionStore";
import { Users } from "../../hooks/Users.type";
import { useedit_deleteStore } from "../../store/Edit-delete/edit-deleteStore";
import { useNavigate } from "react-router";

const Grid = () => {
  const isEdittingOrDeleting = useedit_deleteStore((state) => state.isChanging);
  const userToken = useSessionStore((state) => state.accessToken);
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const [searchMessage, setSearchMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const navigate = useNavigate();

  const { data: allUsers, isLoading: fetchingAll } = useQuery<Users[]>({
    queryKey: ["users"],
    queryFn: () => getUsers(userToken!, navigate),
    enabled: !!userToken,
  });

  const { data: searchedUsers, isLoading: fetchingSearch } = useQuery<Users[]>({
    queryKey: ["searchedUsers", searchMessage],
    queryFn: () => getUsers(userToken!, navigate, searchMessage),
    enabled: !!userToken && hasSearched,
    refetchOnWindowFocus: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchMessage(value);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      if (value.trim() !== "") {
        setHasSearched(true);
      } else {
        setHasSearched(false);
      }
    }, 750);
  };

  const isSearching = hasSearched;
  const displayedUsers = isSearching ? searchedUsers : allUsers;
  const isLoading = isSearching ? fetchingSearch : fetchingAll;
  if (isLoading || isEdittingOrDeleting) return <LoadingPage />;
  else
    return (
      <div
        className={`${lightTheme ? "bg-white" : "bg-gray-500"} min-h-screen`}
      >
        <Search label={searchMessage} onChange={handleChange} />
        {displayedUsers?.length == 0 ? (
          <div className="flex flex-col justify-between items-center">
            <div
              className={`flex flex-col justify-center items-center rounded-2xl p-2 ${
                lightTheme ? "bg-gray-500" : "bg-gray-700"
              } `}
            >
              <h1
                className={`text-2xl font-bold text-center p-2 roundex-2xl ${
                  lightTheme
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-primary-dark)]"
                }`}
              >
                No User Match Search Criteria
              </h1>
            </div>
          </div>
        ) : (
          <div className="m-8 grid gap-4 max-w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedUsers?.map((user) => (
              <UserCard
              key={user.id}
              user={user} 
              />
            ))}
          </div>
        )}
      </div>
    );
};
export default Grid;
