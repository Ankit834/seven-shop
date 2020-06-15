import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Product } from '../store/product/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private ProductUrl = 'https://www.mocky.io/v2/5eda4003330000740079ea60';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<any>(this.ProductUrl)
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
