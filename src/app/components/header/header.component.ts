import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItemsCount: number;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store
      .select((store) => store.cart)
      .subscribe((data) => {
        this.totalItemsCount = data.totalItemsCount;
      });
  }

  openDialog() {
    this.dialog.open(CartComponent, {
      hasBackdrop: false,
      maxHeight: 'calc(100vh - 20px)',
    });
  }
}
