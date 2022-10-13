import { TestBed } from '@angular/core/testing';

import { FakeTestService } from './fake.test.service';

describe('FakeTestService', () => {
  let service: FakeTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
