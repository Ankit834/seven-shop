import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { ShoppingCartItem } from 'src/app/store/cart/models';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCartAction } from 'src/app/store/cart/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: ShoppingCartItem[];
  totalItemsCount: number;
  totalPrice: number;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.items = data.items;
      this.totalItemsCount = data.totalItemsCount;
      this.totalPrice = data.totalPrice;
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  clearShoppingCart() {
    this.store.dispatch(new UpdateCartAction([]));
  }
}
