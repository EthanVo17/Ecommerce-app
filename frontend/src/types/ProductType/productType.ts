
interface ProductRole {
    id: string;
    name: string;
    price: number;
    description: string,
    images: string[];
    category: string;
    brand: string;
    countInStock: number
    rating?: number;
    numReviews?: number;
}

export default ProductRole;