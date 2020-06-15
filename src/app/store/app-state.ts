import { IProductState } from './product/models';
import { IShoppingCartState } from './cart/models';

export interface AppState {
  readonly product: IProductState;
  readonly cart: IShoppingCartState;
}
