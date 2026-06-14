
interface ProductType {
    _id: string;
    name: string;
    price: number;
    discountPrice?: number;
    description: string,
    images: string[];
    category: string;
    brand: string;
    slug?: string;
    countInStock: number
    rating?: number;
    numReviews?: number;
}

export default ProductType;