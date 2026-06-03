import { ProductType } from 'types/'

const productMock: ProductType[] = [
    {
    _id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    description: '',
    price: 25000000,
    images: ['https://via.placeholder.com/400'],
    category: 'Điện thoại',
    brand: 'Apple',
    countInStock: 10,
    rating: 4.8,
  },
  {
    _id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    description: '',
    price: 23000000,
    images: ['https://via.placeholder.com/400'],
    category: 'Điện thoại',
    brand: 'Samsung',
    countInStock: 5,
    rating: 4.9,
  },
  {
    _id: '3',
    name: 'MacBook Air M3',
    description: '',
    price: 27990000,
    images: ['https://via.placeholder.com/400'],
    category: 'Laptop',
    brand: 'Apple',
    countInStock: 0, // Hết hàng test thử
    rating: 4.7,
  },
  {
    _id: '4',
    name: 'Chuột Logitech MX Master 3S',
    description: '',
    price: 24500000,
    images: ['https://via.placeholder.com/400'],
    category: 'Phụ kiện',
    brand: 'Logitech',
    countInStock: 20,
    rating: 4.6,
  }
];

export default productMock;