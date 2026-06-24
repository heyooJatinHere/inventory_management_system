import client from "../api/client";

export const getDashboard = async () => {

    const response = await client.get(
        "/dashboard/"
    );

    return response.data;
};