import { Inject, Injectable } from '@angular/core';
import { ProductRepository } from '@productModules/domain/ports/ProductRepository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidateIfExistProduct {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository
  ) {}

  execute(id: string): Observable<boolean> {
    return this.productRepository.validateUniqueProductId(id);
  }
}
