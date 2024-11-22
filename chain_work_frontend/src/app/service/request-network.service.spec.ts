import { TestBed } from '@angular/core/testing';

import { RequestNetworkService } from './request-network.service';

describe('RequestNetworkService', () => {
  let service: RequestNetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestNetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
