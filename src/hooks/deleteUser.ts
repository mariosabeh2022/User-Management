import { Users } from "./Users.type";
const deleteUser = async (token: string, id: string): Promise<Users> => {
  const response = await fetch(`/api/users/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const json = await response.json();
  return json.result.data.user as Users;
};
export default deleteUser;
