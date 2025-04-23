import { useQuery } from "@tanstack/react-query";
import { useSessionStore } from "../store/session/sessionStore";
import { Status } from "../Components/Molecules/UserCard";
import getUsers from "./getUsers";

export interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: Status;
  dateOfBirth: string;
}

interface UseFetchUsersResult {
  data: Users[] | undefined;
  fetching: boolean;
  fetchUsers: () => Promise<void>;
}

export function useFetchUsers(): UseFetchUsersResult {
  const userToken = useSessionStore((state) => state.accessToken);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn:()=> getUsers(userToken!),
    enabled: !!userToken,
  });
  return {
    data,
    fetching: isLoading,
    fetchUsers: async () => {
      await refetch();
    },
  };
}
