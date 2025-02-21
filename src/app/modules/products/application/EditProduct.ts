import { Inject, Injectable } from '@angular/core';
import { Product } from '@productModules/domain/models/product.model';
import { ProductResponse } from '@productModules/domain/models/productCreated.model';
import { ProductRepository } from '@productModules/domain/ports/ProductRepository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditProduct {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository
  ) {}

  execute(product: Product): Observable<ProductResponse> {
    return this.productRepository.update(product);
  }
}
