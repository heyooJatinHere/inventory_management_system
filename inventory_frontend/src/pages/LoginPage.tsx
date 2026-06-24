import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {

    const navigate = useNavigate();

    const { login: saveToken } = useAuth();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            const response = await login({
                username,
                password
            });

            saveToken(
                response.access_token
            );

            navigate("/dashboard");

        } catch {

            alert(
                "Invalid credentials"
            );

        }

    };

    return (

        <div className="min-h-screen flex justify-center items-center">

            <form
                onSubmit={handleSubmit}
                className="space-y-4 border p-6 rounded"
            >

                <h1 className="text-2xl font-bold">
                    Login
                </h1>

                <input
                    className="border p-2 w-full"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(
                            e.target.value
                        )
                    }
                />

                <input
                    className="border p-2 w-full"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                    Login
                </button>

            </form>

        </div>

    );
}