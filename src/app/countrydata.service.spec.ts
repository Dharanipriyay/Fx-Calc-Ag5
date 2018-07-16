import { TestBed, inject } from '@angular/core/testing';

import { CountrydataService } from './countrydata.service';

describe('CountrydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountrydataService]
    });
  });

  it('should be created', inject([CountrydataService], (service: CountrydataService) => {
    expect(service).toBeTruthy();
  }));
});
