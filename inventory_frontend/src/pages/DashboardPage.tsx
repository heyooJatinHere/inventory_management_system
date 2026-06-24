import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboardService";

import type { DashboardData } from "../types/dashboard";

export default function DashboardPage() {

    const [dashboard, setDashboard] =
        useState<DashboardData | null>(null);

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            const response = await getDashboard();

            setDashboard(response);

        } catch (error) {

            console.error(error);

        }

    };

    if (!dashboard) {

        return (
            <div className="p-6">
                Loading...
            </div>
        );

    }

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                <div className="border rounded p-5 shadow">
                    <h2 className="text-gray-500">
                        Total Products
                    </h2>

                    <p className="text-3xl font-bold">
                        {dashboard.total_products}
                    </p>
                </div>

                <div className="border rounded p-5 shadow">
                    <h2 className="text-gray-500">
                        Total Customers
                    </h2>

                    <p className="text-3xl font-bold">
                        {dashboard.total_customers}
                    </p>
                </div>

                <div className="border rounded p-5 shadow">
                    <h2 className="text-gray-500">
                        Total Orders
                    </h2>

                    <p className="text-3xl font-bold">
                        {dashboard.total_orders}
                    </p>
                </div>

                <div className="border rounded p-5 shadow">
                    <h2 className="text-gray-500">
                        Low Stock Products
                    </h2>

                    <p className="text-3xl font-bold">
                        {dashboard.low_stock_products}
                    </p>
                </div>

            </div>

        </div>

    );

}