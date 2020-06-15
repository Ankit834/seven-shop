import { ProductActions, ProductActionTypes } from './actions';
import { IProductState } from './models';

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
};

export function ProductReducer(state = initialState, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.SET_PRODUCTS:
      return { ...state, loading: true };
    case ProductActionTypes.SET_PRODUCTS_SUCCESS:
      return { ...state, products: action.products, loading: false };
    case ProductActionTypes.ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}
