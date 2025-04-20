import { Outlet } from "react-router";
import { ProtectedRoute } from "../Routes/ProtectedRoute";
import Navbar from "../Components/Organismes/Navbar";
const Shared = () => {
  return (
    <div>
      <Navbar />
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    </div>
  );
};
export default Shared;
