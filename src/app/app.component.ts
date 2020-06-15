import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-state';
import { SetProductsAction } from './store/product/actions';
import { UpdateCartAction } from './store/cart/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'seven-shop';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new SetProductsAction());
    let items = JSON.parse(localStorage.getItem('cart'));
    if (items.length) {
      this.store.dispatch(new UpdateCartAction(items));
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.store.select('cart').subscribe((data) => {
      localStorage.setItem('cart', JSON.stringify(data.items));
    });
  }
}
