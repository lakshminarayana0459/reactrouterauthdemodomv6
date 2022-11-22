import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  // this is normal approach
//   return children;


return(
    <div>
        <h1>hello</h1>
       <Outlet />
    </div>
)
};
