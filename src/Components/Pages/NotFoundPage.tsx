import { Link } from "react-router";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-full bg-gray-400 h-screen">
      <h1 className="text-[var(--color-primary)] font-extrabold text-4xl">
        404 Not Found
      </h1>
      <br />
      <Link to="/login" className="font-bold text-2xl hover:underline hover:shadow-md">
        Go Back To Users Page
      </Link>
    </div>
  );
};
export default NotFoundPage;
