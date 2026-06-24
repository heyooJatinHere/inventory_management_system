import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createCustomer } from "../services/customerService";

export default function CustomerFormPage() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            await createCustomer({
                full_name: fullName,
                email,
                phone
            });

            navigate("/customers");

        } catch (error) {

            console.error(error);

            alert("Failed to create customer");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="max-w-2xl bg-white rounded shadow p-6">

            <h1 className="text-3xl font-bold mb-6">
                Add Customer
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div>

                    <label className="block mb-2 font-medium">
                        Full Name
                    </label>

                    <input
                        className="w-full border rounded p-3"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={(e) =>
                            setFullName(
                                e.target.value
                            )
                        }
                        required
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        className="w-full border rounded p-3"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                        required
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Phone
                    </label>

                    <input
                        className="w-full border rounded p-3"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) =>
                            setPhone(
                                e.target.value
                            )
                        }
                        required
                    />

                </div>

                <button
                    disabled={loading}
                    className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
                >
                    {
                        loading
                            ? "Saving..."
                            : "Save Customer"
                    }
                </button>

            </form>

        </div>

    );

}