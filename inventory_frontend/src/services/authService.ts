import client from "../api/client";

export interface LoginPayload {
    username: string;
    password: string;
}

export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
}

export const login = async (
    payload: LoginPayload
) => {

    const response = await client.post(
        "/auth/login",
        payload
    );

    return response.data;
};

export const register = async (
    payload: RegisterPayload
) => {

    const response = await client.post(
        "/auth/register",
        payload
    );

    return response.data;
};