import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    deleteCustomer,
    getCustomers
} from "../services/customerService";

import type {
    Customer
} from "../types/customer";

export default function CustomerListPage() {

    const [customers, setCustomers] =
        useState<Customer[]>([]);

    useEffect(() => {

        fetchCustomers();

    }, []);

    const fetchCustomers = async () => {

        try {

            const response = await getCustomers();

            setCustomers(response);

        } catch (error) {

            console.error(error);

        }

    };

    const handleDelete = async (
        id: number
    ) => {

        try {

            await deleteCustomer(id);

            fetchCustomers();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="p-6">

            <div className="flex justify-between mb-6">

                <h1 className="text-3xl font-bold">
                    Customers
                </h1>

                <Link
                    to="/customers/new"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Customer
                </Link>

            </div>

            <table className="w-full border">

                <thead>

                    <tr className="bg-gray-100">

                        <th className="border p-2">
                            Name
                        </th>

                        <th className="border p-2">
                            Email
                        </th>

                        <th className="border p-2">
                            Phone
                        </th>

                        <th className="border p-2">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        customers.map((customer) => (

                            <tr key={customer.id}>

                                <td className="border p-2">
                                    {customer.full_name}
                                </td>

                                <td className="border p-2">
                                    {customer.email}
                                </td>

                                <td className="border p-2">
                                    {customer.phone}
                                </td>

                                <td className="border p-2">

                                    <button
                                        onClick={() =>
                                            handleDelete(customer.id)
                                        }
                                        className="bg-red-500 text-white px-3 py-1 rounded"
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