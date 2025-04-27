import { Users } from "./Users.type";
import { NavigateFunction } from "react-router-dom";
const deleteUser = async (
  token: string,
  id: string,
  navigate: NavigateFunction
): Promise<{ user: Users; message: string }> => {
  const response = await fetch(`/api/users/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status == 401) {
    alert("User Not Authorized");
    navigate("/login");
    throw new Error("User Not Authorised");
  } else if (response.status == 404) {
    navigate("/dashboard");
    throw new Error("User Not  Found");
  } else if (response.status == 500) {
    alert("Server error");
    throw new Error("Server Error");
  }
  const json = await response.json();

  return {
    user: json.result.data.user as Users,
    message: json.result.message as string,
  };
};
export default deleteUser;
