import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CartState, CartType } from "types/";

const caculateTotals = (items: CartType[]) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { totalItems, totalPrice }
}

const useCartStore = create<CartState>()(
    persist((set, get) => ({
        items: [],
        totalItem: 0,
        totalPrice: 0,

        addToCart: (NewItems) => {
            const currentItem = get().items;
            const existingItem = currentItem.find((item) => (item.productId === NewItems.productId));

            let updateItem;

            if(existingItem) {
                updateItem = currentItem.map(item => item.productId === NewItems.productId ? {...item, NewItems} : item);
            }else {
                updateItem = [...currentItem, NewItems];    
            }

            const total = caculateTotals(updateItem);

            set({items: updateItem, ...total});
        },

        removeFromCart: (productId) => {
            const updateItems = get().items.filter((item) => item.productId !== productId);
            const total = caculateTotals(updateItems);
            set({items: updateItems, ...total});
        },

        updateQuantity: (quantity, productId) => {
            const updateItem = get().items.map(item => {
                return item.productId === productId ? {...item, quantity} : item
            })
            const total = caculateTotals(updateItem);
            set({items: updateItem, ...total});
        },

        clearCart() {
            return set({items: [], totalItem: 0, totalPrice: 0});
        },
    }),
    {
        "name": "cart-storage"
    }
)
);
    


export default useCartStore