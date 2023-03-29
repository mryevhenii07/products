export interface MyProduct {
  id: number;
  category: string;
  description: string;
  discountPercentage: number;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  title: string;
  thumbnail: string;
}
export default interface MyFormValues {
  name: string;
  author: string;
  yearOfPublication?: number;
  rating?: number;
  id: number;
}
