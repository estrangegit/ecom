import { TestBed, inject } from '@angular/core/testing';

import { RouterDataService } from './router-data.service';

describe('RouterDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterDataService]
    });
  });

  it('should be created', inject([RouterDataService], (service: RouterDataService) => {
    expect(service).toBeTruthy();
  }));
});
