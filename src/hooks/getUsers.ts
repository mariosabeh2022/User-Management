import { Users } from "./useFetchUsers";
const getUsers = async (token: string): Promise<Users[]> => {
  const response = await fetch("/api/users", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if(!response.ok){
    throw new Error('Failed to fetch users')
  }
  const json=await response.json()
  return json.result.data.users;
};
export default getUsers;
