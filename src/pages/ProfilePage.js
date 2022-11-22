import React from "react";
import { useAuth } from "../context/AuthProvider";


const ProfilePage = () => {
    const { logout} = useAuth();

    const handleSubmit = () => {
        logout();
      };

        return(
            <div>
                Hello ProfilePage
                <button onClick={handleSubmit}>LogOut</button>
            </div>
        )
    
};


export default ProfilePage;