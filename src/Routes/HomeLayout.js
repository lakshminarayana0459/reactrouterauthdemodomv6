import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";



export const HomeLayout = () => {
    const {user} = useAuth();
    console.log("user", user);

    if (user) {
        return <Navigate to="/dashboard/profile" replace />;
      }

      return (
        <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Outlet />
      </div>
      )

}