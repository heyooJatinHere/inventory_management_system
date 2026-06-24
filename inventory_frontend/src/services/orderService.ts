import client from "../api/client";

export const getOrders = async () => {

    const response = await client.get(
        "/order/"
    );

    return response.data;
};

export const getOrderById = async (
    id: number
) => {

    const response = await client.get(
        `/order/${id}`
    );

    return response.data;
};

export const createOrder = async (
    payload: any
) => {

    const response = await client.post(
        "/order/",
        payload
    );

    return response.data;
};

export const deleteOrder = async (
    id: number
) => {

    const response = await client.delete(
        `/order/${id}`
    );

    return response.data;
};