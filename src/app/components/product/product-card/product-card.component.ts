import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/store/product/models';
import { ShoppingCartItem } from 'src/app/store/cart/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('cart-items') cartItems: ShoppingCartItem[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  getQuantity(product: Product) {
    let cartProduct = this.cartItems.find((i) => i.id === product.id);
    return cartProduct ? cartProduct.quantity : 0;
  }
}
