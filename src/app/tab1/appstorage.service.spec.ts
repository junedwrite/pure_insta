import { TestBed } from '@angular/core/testing';

import { AppstorageService } from './appstorage.service';

describe('AppstorageService', () => {
  let service: AppstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
