import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createProduct } from "../services/productService";

export default function ProductFormPage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [sku, setSku] = useState("");
    const [description, setDescription] = useState("");
    const [costPrice, setCostPrice] = useState(0);
    const [sellingPrice, setSellingPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [reorderLevel, setReorderLevel] = useState(0);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            await createProduct({
                name,
                sku,
                description,
                cost_price: costPrice,
                selling_price: sellingPrice,
                quantity,
                reorder_level: reorderLevel
            });

            navigate("/products");

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="p-6 max-w-xl">

            <h1 className="text-3xl font-bold mb-6">
                Add Product
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    className="border p-2 w-full"
                    placeholder="Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <input
                    className="border p-2 w-full"
                    placeholder="SKU"
                    value={sku}
                    onChange={(e) =>
                        setSku(e.target.value)
                    }
                />

                <textarea
                    className="border p-2 w-full"
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />

                <input
                    className="border p-2 w-full"
                    type="number"
                    placeholder="Cost Price"
                    onChange={(e) =>
                        setCostPrice(
                            Number(e.target.value)
                        )
                    }
                />

                <input
                    className="border p-2 w-full"
                    type="number"
                    placeholder="Selling Price"
                    onChange={(e) =>
                        setSellingPrice(
                            Number(e.target.value)
                        )
                    }
                />

                <input
                    className="border p-2 w-full"
                    type="number"
                    placeholder="Quantity"
                    onChange={(e) =>
                        setQuantity(
                            Number(e.target.value)
                        )
                    }
                />

                <input
                    className="border p-2 w-full"
                    type="number"
                    placeholder="Reorder Level"
                    onChange={(e) =>
                        setReorderLevel(
                            Number(e.target.value)
                        )
                    }
                />

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Save
                </button>

            </form>

        </div>

    );

}