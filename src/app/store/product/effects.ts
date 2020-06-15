import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/services/product.service';
import {
  SetProductsAction,
  ProductActionTypes,
  SetProductsSuccessAction,
  SetProductsErrorAction,
} from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from './models';

@Injectable()
export class ProductEffects {
  @Effect() setProducts$ = this.actions$.pipe(
    ofType<SetProductsAction>(ProductActionTypes.SET_PRODUCTS),
    mergeMap(() =>
      this.productService.getProducts().pipe(
        map((data) => new SetProductsSuccessAction(data.data as Product[])),
        catchError((error) => of(new SetProductsErrorAction(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
