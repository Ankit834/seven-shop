import { Injectable } from '@angular/core';
import { Product } from '../store/product/models';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import { ShoppingCartItem } from '../store/cart/models';
import { UpdateCartAction } from '../store/cart/actions';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private store: Store<AppState>) {}

  addToCart(product: Product) {
    this.updateCart(product, 1);
  }

  removeFromCart(product: Product) {
    this.updateCart(product, -1);
  }

  updateCart(product: Product, change: number) {
    this.store
      .select('cart')
      .pipe(take(1))
      .subscribe((data) => {
        let { items } = data;
        let index = items.findIndex((p) => p.id === product.id);
        if (index >= 0) {
          let { quantity, totalPrice } = items[index];
          quantity += change;
          totalPrice = product.price * quantity;
          if (!quantity) {
            items = items.filter((item) => item.id != items[index].id);
          } else {
            if (quantity > items[index].maxQuantity) {
              return;
            }
            let item = { ...items[index], quantity, totalPrice };
            items = [...items.slice(0, index), item, ...items.slice(index + 1)];
          }
        } else {
          items = [
            ...items,
            {
              id: product.id,
              name: product.name,
              imageUrl: product.image,
              quantity: 1,
              price: product.price,
              totalPrice: product.price,
              maxQuantity: +product.quantity,
            },
          ];
        }
        this.store.dispatch(new UpdateCartAction(items));
      });
  }

  getProductQuantity(productId: number, shoppingCartItems: ShoppingCartItem[]) {
    let cartProduct = shoppingCartItems.find((i) => i.id === productId);
    return cartProduct ? cartProduct.quantity : 0;
  }
}
