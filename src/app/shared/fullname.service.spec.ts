import { TestBed } from '@angular/core/testing';

import { FullnameService } from './fullname.service';

describe('FullnameService', () => {
  let service: FullnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
