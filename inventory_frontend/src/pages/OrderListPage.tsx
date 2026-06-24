import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    deleteOrder,
    getOrders
} from "../services/orderService";

import type {
    Order
} from "../types/order";

export default function OrderListPage() {

    const [orders, setOrders] =
        useState<Order[]>([]);

    useEffect(() => {

        fetchOrders();

    }, []);

    const fetchOrders = async () => {

        try {

            const response =
                await getOrders();

            setOrders(response);

        } catch (error) {

            console.error(error);

        }

    };

    const handleDelete = async (
        id: number
    ) => {

        try {

            await deleteOrder(id);

            fetchOrders();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="p-6">

            <div className="flex justify-between mb-6">

                <h1 className="text-3xl font-bold">
                    Orders
                </h1>

                <Link
                    to="/orders/new"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create Order
                </Link>

            </div>

            <table className="w-full border">

                <thead>

                    <tr className="bg-gray-100">

                        <th className="border p-2">
                            Order ID
                        </th>

                        <th className="border p-2">
                            Customer ID
                        </th>

                        <th className="border p-2">
                            Total Amount
                        </th>

                        <th className="border p-2">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        orders.map((order) => (

                            <tr key={order.id}>

                                <td className="border p-2">
                                    {order.id}
                                </td>

                                <td className="border p-2">
                                    {order.customer_id}
                                </td>

                                <td className="border p-2">
                                    ₹ {order.total_amount}
                                </td>

                                <td className="border p-2 space-x-2">

                                    <Link
                                        to={`/orders/${order.id}`}
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                    >
                                        View
                                    </Link>

                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={() =>
                                            handleDelete(order.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}