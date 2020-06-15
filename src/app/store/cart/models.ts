export interface IShoppingCartState {
  items: ShoppingCartItem[];
  totalPrice: number;
  totalItemsCount: number;
}

export interface ShoppingCartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  totalPrice: number;
  maxQuantity: number;
}
