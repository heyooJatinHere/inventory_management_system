import { useNavigate } from "react-router-dom";

import {
    useAuth
} from "../context/AuthContext";

export default function Navbar() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <div className="h-16 border-b px-8 flex justify-end items-center">

            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>

        </div>

    );

}