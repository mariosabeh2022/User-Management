import { Users } from "./Users.type";
import { FormData } from "../Components/Organismes/EditUserForm/EditUserForm";
const updateUser = async (token: string, id: string, userData:FormData): Promise<Users> => {
  const response = await fetch(`/api/users/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData)
  });
  if (!response.ok) {
    throw new Error("Failed to update users");
  }
  const json = await response.json();
  return json.result.data.user as Users;
};
export default updateUser;
