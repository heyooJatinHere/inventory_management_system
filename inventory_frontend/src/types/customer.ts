export interface Customer {
    id: number;
    full_name: string;
    email: string;
    phone: string;
}

export interface CustomerCreatePayload {
    full_name: string;
    email: string;
    phone: string;
}