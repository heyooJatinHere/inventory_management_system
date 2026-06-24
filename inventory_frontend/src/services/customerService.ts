import client from "../api/client";

export const getCustomers = async () => {

    const response = await client.get(
        "/customer/"
    );

    return response.data;
};

export const getCustomerById = async (
    id: number
) => {

    const response = await client.get(
        `/customer/${id}`
    );

    return response.data;
};

export const createCustomer = async (
    payload: any
) => {

    const response = await client.post(
        "/customer/",
        payload
    );

    return response.data;
};

export const deleteCustomer = async (
    id: number
) => {

    const response = await client.delete(
        `/customer/${id}`
    );

    return response.data;
};