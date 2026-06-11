//API
import {axiosClient} from "utils/";

import { ProductType } from 'types/';

const ProductService = {
    getProducts: async (): Promise<ProductType[]> => {
        try {
            const response = await axiosClient.get('/products');
            return response.data;
        }catch(error) {
            console.error('error fetching products:', error);
            throw error;
        }
    }
}

export default ProductService;