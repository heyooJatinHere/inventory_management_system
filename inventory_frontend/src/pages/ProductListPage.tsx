import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteProduct, getProducts } from "../services/productService";
import type { Product } from "../types/product";

export default function ProductListPage() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const response = await getProducts();

            setProducts(response);

        } catch (error) {

            console.error(error);

        }

    };

    const handleDelete = async (
        id: number
    ) => {

        try {

            await deleteProduct(id);

            fetchProducts();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="p-6">

            <div className="flex justify-between mb-5">

                <h1 className="text-3xl font-bold">
                    Products
                </h1>

                <Link
                    to="/products/new"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Product
                </Link>

            </div>

            <table className="w-full border">

                <thead>

                    <tr className="bg-gray-100">

                        <th className="border p-2">Name</th>
                        <th className="border p-2">SKU</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        products.map((product) => (

                            <tr key={product.id}>

                                <td className="border p-2">
                                    {product.name}
                                </td>

                                <td className="border p-2">
                                    {product.sku}
                                </td>

                                <td className="border p-2">
                                    ₹ {product.selling_price}
                                </td>

                                <td className="border p-2">
                                    {product.quantity}
                                </td>

                                <td className="border p-2">

                                    <button
                                        onClick={() =>
                                            handleDelete(product.id)
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