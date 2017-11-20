import { TestBed, inject } from '@angular/core/testing';

import { UserDataService } from './user-data.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService]
    });
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
});
