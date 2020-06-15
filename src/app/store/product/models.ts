export interface IProductState {
  products: Product[];
  loading: boolean;
  error: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}
