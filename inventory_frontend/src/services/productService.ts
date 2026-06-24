import client from "../api/client";

export const getProducts = async () => {

    const response = await client.get(
        "/product/"
    );

    return response.data;
};

export const getProductById = async (
    id: number
) => {

    const response = await client.get(
        `/product/${id}`
    );

    return response.data;
};

export const createProduct = async (
    payload: any
) => {

    const response = await client.post(
        "/product/",
        payload
    );

    return response.data;
};

export const updateProduct = async (
    id: number,
    payload: any
) => {

    const response = await client.put(
        `/product/${id}`,
        payload
    );

    return response.data;
};

export const deleteProduct = async (
    id: number
) => {

    const response = await client.delete(
        `/product/${id}`
    );

    return response.data;
};

export const getLowStockProducts = async () => {

    const response = await client.get(
        "/product/low-stock"
    );

    return response.data;
};