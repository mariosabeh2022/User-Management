import Button from "../../Atoms/Button/Button";
import UserInitial from "../../Atoms/UserInitials/UserInitial";
import { UserCardProps } from "../UserCard/UserCard.type";
import { Status } from "../UserCard/UserCard.type";
import { useThemeStore } from "../../../store/theme/themeStore";
const UserCard = ({
  firstName,
  lastName,
  email,
  dob,
  status,
}: UserCardProps) => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const year = dob.getFullYear();
  const m = dob.getMonth() + 1;
  // Adding 0 if it isn't the last 3 months of the year
  const month = m < 10 ? "0" + m : String(m);
  const d = dob.getDate();
  // Adding 0 if it is the first 9 days of the month
  const day = d < 10 ? "0" + d : String(d);
  const formattedDob = `${year}-${month}-${day}`;
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
        />

        <Button
          className={`button-base px-3 py-2 mr-3 ${
            lightTheme ? "red-button" : "red-button-dark"
          }`}
          label="Delete"
        />
      </div>
    </div>
  );
};
export default UserCard;
export { Status };
