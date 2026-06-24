import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCustomers } from "../services/customerService";
import { getProducts } from "../services/productService";
import { createOrder } from "../services/orderService";

export default function CreateOrderPage() {

    const navigate = useNavigate();

    const [customers, setCustomers] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);

    const [customerId, setCustomerId] =
        useState<number>(0);

    const [productId, setProductId] =
        useState<number>(0);

    const [quantity, setQuantity] =
        useState<number>(1);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {

        setCustomers(
            await getCustomers()
        );

        setProducts(
            await getProducts()
        );

    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            if (quantity <= 0) {
                alert("Quantity must be greater than 0");
                return;
            }

            await createOrder({

                customer_id: customerId,

                items: [

                    {
                        product_id: productId,
                        quantity
                    }

                ]

            });

            navigate("/orders");

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="p-6 max-w-xl">

            <h1 className="text-3xl font-bold mb-6">
                Create Order
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <select
                    className="border p-2 w-full"
                    onChange={(e) =>
                        setCustomerId(
                            Number(e.target.value)
                        )
                    }
                >

                    <option>
                        Select Customer
                    </option>

                    {

                        customers.map((customer) => (

                            <option
                                key={customer.id}
                                value={customer.id}
                            >
                                {customer.full_name}
                            </option>

                        ))

                    }

                </select>

                <select
                    className="border p-2 w-full"
                    onChange={(e) =>
                        setProductId(
                            Number(e.target.value)
                        )
                    }
                >

                    <option>
                        Select Product
                    </option>

                    {

                        products.map((product) => (

                            <option
                                key={product.id}
                                value={product.id}
                            >
                                {product.name}
                            </option>

                        ))

                    }

                </select>

                <input
                    className="border p-2 w-full"
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) =>
                        setQuantity(
                            Math.max(1, Number(e.target.value))
                        )
                    }
                />

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create Order
                </button>

            </form>

        </div>

    );

}