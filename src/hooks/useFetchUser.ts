import { useCallback,useState } from "react";
import { useSessionStore } from "../store/session/sessionStore";
import { Users } from "./useFetchUsers";

export function useFetchUser() {
  const [users, setUsers] = useState<Users[]>([]);
  const [fetching, setFetching] = useState(false);
  const userToken = useSessionStore((state) => state.accessToken);
  const fetchUser = useCallback(
    async (keyword: string) => {
      setFetching(true)
      try {
        const response = await fetch(
          `/api/users?search=${encodeURIComponent(keyword)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        const data = await response.json();
        const result = data.result.data.users
        setUsers(result)
        setFetching(false)
      } catch (e) {
        console.log("Error fetching users:", e);
        return [];
      }
    },
    [userToken]
  );
  return { users,fetching,fetchUser };
}
