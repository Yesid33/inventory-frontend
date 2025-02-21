import { Inject, Injectable } from '@angular/core';
import { ProductResponse } from '@productModules/domain/models/productCreated.model';
import { ProductRepository } from '@productModules/domain/ports/ProductRepository';
import { Observable } from 'rxjs';
import { Product } from '../domain/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DeleteProduct {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository
  ) {}

  execute(product: Product): Observable<ProductResponse> {
    return this.productRepository.delete(product);
  }
}
