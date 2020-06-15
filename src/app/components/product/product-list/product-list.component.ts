import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/store/product/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { ShoppingCartItem } from 'src/app/store/cart/models';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  cartItems: ShoppingCartItem[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('product').subscribe((data) => {
      this.products = data.products;
    });

    this.store.select('cart').subscribe((data) => {
      this.cartItems = data.items;
    });
  }
}
