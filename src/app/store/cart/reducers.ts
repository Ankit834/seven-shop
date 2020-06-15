import { ShoppingCartActions, ShoppingCartActionTypes } from './actions';
import { IShoppingCartState } from './models';

const initialState: IShoppingCartState = {
  items: [],
  totalItemsCount: 0,
  totalPrice: 0,
};

export function ShoppingCartReducer(
  state = initialState,
  action: ShoppingCartActions
) {
  switch (action.type) {
    case ShoppingCartActionTypes.UPDATE_CART:
      return {
        ...state,
        items: action.items,
        totalItemsCount: action.items.reduce((a, b) => {
          return a + b.quantity;
        }, 0),
        totalPrice: action.items.reduce((a, b) => {
          return +a + +b.totalPrice;
        }, 0),
      };
    default:
      return state;
  }
}
