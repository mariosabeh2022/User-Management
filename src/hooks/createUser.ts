import { Users } from "./Users.type";
import { z } from "zod";
import { schema } from "../Components/Organismes/UserForm/CreateEditUserForm_validationts";
import { NavigateFunction } from "react-router-dom";
type FormData = z.infer<typeof schema>;
const createUser = async (
  userToken: string,
  userData: FormData,
  navigate: NavigateFunction
): Promise<{ user: Users; message: string }> => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(userData),
  });
  if (response.status == 401) {
    alert("User Not Authorized");
    navigate("/login");
    throw new Error("User Not Authorised");
  } else if (response.status == 404) {
    navigate("/dashboard");
    throw new Error("User Not Found");
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
export default createUser;
