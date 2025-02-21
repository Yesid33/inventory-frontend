import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment.development';
import { Product } from '@productModules/domain/models/product.model';
import { ProductResponse } from '@productModules/domain/models/productCreated.model';
import { ProductRepository } from '@productModules/domain/ports/ProductRepository';
import { Observable, map } from 'rxjs';

@Injectable()
export class ProductService implements ProductRepository {
  private readonly urlBase = `${environment.inventory_api_url}`;

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.urlBase}api/products`)
      .pipe(map((data: any) => data.data));
  }

  create(body: Product): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(`${this.urlBase}api/products`, body);
  }

  update(product: Product): Observable<ProductResponse> {
    return this.http.put<ProductResponse>(
      `${this.urlBase}api/products/${product.id}`,
      product
    );
  }

  delete(product: Product): Observable<ProductResponse> {
    return this.http.delete<ProductResponse>(
      `${this.urlBase}api/products/${product.id}`
    );
  }

  validateUniqueProductId(id: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.urlBase}api/products/verification/${id}`
    );
  }
}
