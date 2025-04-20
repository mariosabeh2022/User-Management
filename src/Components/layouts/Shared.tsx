import { Outlet } from "react-router";
import { ProtectedRoute } from "../../Routes/ProtectedRoute";
import Navbar from "../Organismes/Navbar";
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
