import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartDataService } from './shopping-cart-data.service';

describe('ShoppingCartDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartDataService]
    });
  });

  it('should be created', inject([ShoppingCartDataService], (service: ShoppingCartDataService) => {
    expect(service).toBeTruthy();
  }));
});
