import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/store/product/models';
import { ShoppingCartItem } from 'src/app/store/cart/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css'],
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  @Input('cart-items') cartItems: ShoppingCartItem[];

  maxQuantityReached: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    let prod = this.cartItems.find((p) => p.id === this.product.id);
    if (prod.quantity + 1 >= prod.maxQuantity) {
      this.maxQuantityReached = true;
    } else {
      this.maxQuantityReached = false;
    }
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    let prod = this.cartItems.find((p) => p.id === this.product.id);
    if (prod.quantity === prod.maxQuantity) {
      this.maxQuantityReached = false;
    }
    this.cartService.removeFromCart(this.product);
  }

  getQuantity(product: Product) {
    let cartProduct = this.cartItems.find((i) => i.id === product.id);
    return cartProduct ? cartProduct.quantity : 0;
  }
}
