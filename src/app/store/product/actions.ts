import { Action } from '@ngrx/store';
import { Product } from './models';

export enum ProductActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_PRODUCTS_SUCCESS = 'SET_PRODUCTS_SUCCESS',
  ERROR = 'ERROR',
}

export class SetProductsAction implements Action {
  readonly type = ProductActionTypes.SET_PRODUCTS;
}

export class SetProductsSuccessAction implements Action {
  readonly type = ProductActionTypes.SET_PRODUCTS_SUCCESS;

  constructor(public products: Product[]) {}
}

export class SetProductsErrorAction implements Action {
  readonly type = ProductActionTypes.ERROR;

  constructor(public error: string) {}
}

export type ProductActions =
  | SetProductsAction
  | SetProductsSuccessAction
  | SetProductsErrorAction;
