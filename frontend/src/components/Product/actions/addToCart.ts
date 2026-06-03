import Link from 'next/link';
import { ProductType } from 'types/';
import { useCartStore, useAuthStore } from 'stores/';

const addToCart = useCartStore(state => state.addToCart);
const { user } = useAuthStore();

const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: ProductType) => {
    if(!user) {
       
    }
}