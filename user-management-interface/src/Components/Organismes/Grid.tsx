import UserCard from "../Molecules/UserCard";
import { Status } from "../Molecules/UserCard";
import { useState, useEffect } from "react";
import { useSessionStore } from "../../store/session/sessionStore";
import LoadingPage from "../Pages/LoadingPage";

interface Users{
  id:string,
  firstName:string,
  lastName:string,
  email:string,
  status:Status,
  dateOfBirth:string
}

const Grid = () => {
  const userToken = useSessionStore((state) => state.accessToken);
  const [data, setData] = useState<Users[]>([]);
  const [fetching, setFetching] = useState(false);
  const fetchUsers = async () => {
    setFetching(true);
    try {
      const response = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`, // Correctly using the token
        },
      });

      const data = await response.json();
      const result = data.result.data.users;
      setData(result);
      setFetching(false);
    } catch (e) {
      console.error("Error fetching users:", e);
    }
  };

  useEffect(() => {
    fetchUsers();
  },[]);

  if (fetching) return <LoadingPage />;
  else
    return (
      <div className="m-8 grid gap-4 max-w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((user) => (
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
    );
};
export default Grid;
