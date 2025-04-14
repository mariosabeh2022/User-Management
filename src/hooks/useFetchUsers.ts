import { useState, useEffect,useCallback } from "react";
import { useSessionStore } from "../store/session/sessionStore";
import { Status } from "../Components/Molecules/UserCard";

export interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: Status;
  dateOfBirth: string;
}

interface UseFetchUsersResult {
  data: Users[];
  fetching: boolean;
  fetchUsers: () => Promise<void>;
}

export function useFetchUsers():UseFetchUsersResult {
  const [users, setUsers] = useState<Users[]>([]);
  const [fetching, setFetching] = useState(false);
  const userToken = useSessionStore((state) => state.accessToken);
  const fetchUsers=useCallback(async () => {
    setFetching(true);
    try {
      const response = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });

      const data = await response.json();
      const result = data.result.data.users;
      setUsers(result);
      setFetching(false);
    } catch (e) {
      console.log("Error fetching users:", e);
    }
  }, [userToken]);
  useEffect(()=>{
    fetchUsers();
  },[fetchUsers])
  return{data:users,fetching,fetchUsers}
}
