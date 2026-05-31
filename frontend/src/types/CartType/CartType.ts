interface CartType {
    productId: string;
    name: string;
    price: number;
    countInStock: number;
    quantity: number;
    images: string[];
}

interface CartState {
    items: CartType[];
    totalItem: number;
    totalPrice: number;

    //action
    addToCart: (NewItem: CartType) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (quantity: number, productId: string) => void;
    clearCart: () => void;
}

export type { CartState, CartType }