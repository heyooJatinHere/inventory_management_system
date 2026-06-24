import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

export default function Layout() {

    return (

        <div className="flex min-h-screen">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <div className="p-6">

                    <Outlet />

                </div>

            </div>

        </div>

    );

}