export interface Product {
    id: number;
    name: string;
    sku: string;
    description: string;
    cost_price: number;
    selling_price: number;
    quantity: number;
    reorder_level: number;
}

export interface ProductCreatePayload {
    name: string;
    sku: string;
    description: string;
    cost_price: number;
    selling_price: number;
    quantity: number;
    reorder_level: number;
}