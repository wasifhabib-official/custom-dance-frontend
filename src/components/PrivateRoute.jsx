import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div
      className="relative pointer-events-auto"
      style={{ pointerEvents: "auto" }}
    >
      {children}
    </div>
  );
};

export default PrivateRoute;
