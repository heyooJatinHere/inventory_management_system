export interface OrderItemPayload {
    product_id: number;
    quantity: number;
}

export interface OrderCreatePayload {
    customer_id: number;
    items: OrderItemPayload[];
}

export interface Order {
    id: number;
    customer_id: number;
    total_amount: number;
}

export interface OrderItem {
    product_id: number;
    quantity: number;
    price: number;
    subtotal: number;
}

export interface OrderDetail {
    id: number;
    customer_id: number;
    total_amount: number;
    items: OrderItem[];
}