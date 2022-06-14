import { TestBed } from '@angular/core/testing';

import { RentComparablesService } from './rent-comparables.service';

describe('RentComparablesService', () => {
  let service: RentComparablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentComparablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
