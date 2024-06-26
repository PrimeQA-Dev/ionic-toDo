import { TestBed } from '@angular/core/testing';

import { FirebaseLibService } from './firebase-lib.service';

describe('FirebaseLibService', () => {
  let service: FirebaseLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
