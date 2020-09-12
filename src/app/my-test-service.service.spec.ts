import { TestBed } from '@angular/core/testing';

import { MyTestServiceService } from './my-test-service.service';

describe('MyTestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyTestServiceService = TestBed.get(MyTestServiceService);
    expect(service).toBeTruthy();
  });
});
