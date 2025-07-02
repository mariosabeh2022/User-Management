import Button from "../../Atoms/Button/Button";
import UserInitial from "../../Atoms/UserInitials/UserInitial";
import { Users } from "../../../hooks/Users.type";
import { useThemeStore } from "../../../store/theme/themeStore";
import { useSessionStore } from "../../../store/session/sessionStore";
import { useNavigate } from "react-router-dom";
import { useedit_deleteStore } from "../../../store/Edit-delete/edit-deleteStore";
import LoadingPage from "../../Pages/LoadingPage";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import deleteUser from "../../../hooks/deleteUser";
import { toast } from "react-toastify";
const UserCard = ({ user }: { user: Users }) => {
  const { id, firstName, lastName, email, status, dateOfBirth } = user;

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const userToken = useSessionStore((state) => state.accessToken);
  const isChanging = useedit_deleteStore((state) => state.isChanging);
  const setIsChanging = useedit_deleteStore((state) => state.setIsChanging);
  const dob = new Date(dateOfBirth);
  const year = dob.getFullYear();
  const m = dob.getMonth() + 1;
  // Adding 0 if it isn't the last 3 months of the year
  const month = m < 10 ? "0" + m : String(m);
  const d = dob.getDate();
  // Adding 0 if it is the first 9 days of the month
  const day = d < 10 ? "0" + d : String(d);
  const formattedDob = `${year}-${month}-${day}`;
  const deleteMutation = useMutation({
    mutationFn: (userId: string) => deleteUser(userToken!, userId, navigate),
    onMutate: () => {
      setIsChanging(true);
    },
    onError: (error) => {
      console.log("Error deleting user:", error);
      toast.error(error.message);
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.removeQueries({ queryKey: ["user", id] });
      toast.success(result.message);
    },
    onSettled: () => {
      setIsChanging(false);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(id);
  };
  const handleEdit = () => {
    navigate(`/dashboard/edit/${id}`, { state: { fetchedUser: user } });
    setIsChanging(true);
  };
  if (isChanging) return <LoadingPage />;
  return (
    <div
      className={`bg-mint-300 rounded-lg p-3 shadow-lg flex flex-col justify-start 
                        hover:shadow-2xl border hover:border-gray-200 ${
                          lightTheme ? "border-gray-50" : "border-gray-500"
                        }`}
    >
      <UserInitial firstName={firstName} lastName={lastName} />
      <h1 className="font-semibold text-2xl text-black-500">
        {firstName} {lastName}
      </h1>
      <span className="info">Email: {email}</span>
      <span className="info">Status: {status}</span>
      <span className="info">Date of Birth: {formattedDob}</span>
      <div className="flex justify-end">
        <Button
          className={`button-base px-4 py-1 mr-4 ${
            lightTheme ? "blue-button" : "blue-button-dark"
          }`}
          label="Edit"
          onClick={handleEdit}
        />

        <Button
          className={`button-base px-3 py-2 mr-3 ${
            lightTheme ? "red-button" : "red-button-dark"
          }`}
          label="Delete"
          onClick={() => {
            const confirmation = confirm(
              "Are you sure you want to delete this user?"
            );
            if (confirmation) handleDelete();
          }}
        />
      </div>
    </div>
  );
};
export default UserCard;
