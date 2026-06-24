import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    getOrderById
} from "../services/orderService";

export default function OrderDetailsPage() {

    const { id } = useParams();

    const [order, setOrder] =
        useState<any>();

    useEffect(() => {

        fetchOrder();

    }, []);

    const fetchOrder = async () => {

        const response =
            await getOrderById(
                Number(id)
            );

        setOrder(response);

    };

    if (!order) {

        return <div>Loading...</div>;

    }

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Order #{order.id}
            </h1>

            <div className="mb-4">

                Customer ID :
                {order.customer_id}

            </div>

            <div className="mb-4">

                Total Amount :
                ₹ {order.total_amount}

            </div>

            <table className="w-full border">

                <thead>

                    <tr>

                        <th className="border p-2">
                            Product ID
                        </th>

                        <th className="border p-2">
                            Quantity
                        </th>

                        <th className="border p-2">
                            Price
                        </th>

                        <th className="border p-2">
                            Subtotal
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        order.items.map(
                            (item: any) => (

                                <tr key={item.product_id}>

                                    <td className="border p-2">
                                        {item.product_id}
                                    </td>

                                    <td className="border p-2">
                                        {item.quantity}
                                    </td>

                                    <td className="border p-2">
                                        ₹ {item.price}
                                    </td>

                                    <td className="border p-2">
                                        ₹ {item.subtotal}
                                    </td>

                                </tr>

                            )
                        )

                    }

                </tbody>

            </table>

        </div>

    );

}