import { Action } from '@ngrx/store';
import { ShoppingCartItem } from './models';

export enum ShoppingCartActionTypes {
  UPDATE_CART = 'UPDATE_CART',
  UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS',
  UPDATE_CART_FAIL = 'UPDATE_CART_FAIL',
}

export class UpdateCartAction implements Action {
  readonly type = ShoppingCartActionTypes.UPDATE_CART;

  constructor(public items: ShoppingCartItem[]) {}
}

export type ShoppingCartActions = UpdateCartAction;
