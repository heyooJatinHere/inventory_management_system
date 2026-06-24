import { Link } from "react-router-dom";

export default function Sidebar() {

    return (

        <div className="w-64 min-h-screen bg-gray-900 text-white p-5">

            <h1 className="text-2xl font-bold mb-8">
                Inventory System
            </h1>

            <div className="space-y-4">

                <Link
                    className="block"
                    to="/dashboard"
                >
                    Dashboard
                </Link>

                <Link
                    className="block"
                    to="/products"
                >
                    Products
                </Link>

                <Link
                    className="block"
                    to="/customers"
                >
                    Customers
                </Link>

                <Link
                    className="block"
                    to="/orders"
                >
                    Orders
                </Link>

            </div>

        </div>

    );

}