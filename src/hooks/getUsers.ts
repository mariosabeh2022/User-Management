import { Users } from "./Users.type";
const getUsers = async (token: string, keyword?: string): Promise<Users[]> => {
  const call = keyword ? `/api/users?search=${encodeURIComponent(keyword)}` : `/api/users`;
  const response = await fetch(
    call,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const json = await response.json();
  return json.result.data.users;
};
export default getUsers;
