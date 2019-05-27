import { TestBed, inject } from '@angular/core/testing';

import { PoolmanagerService } from './poolmanager.service';

describe('PoolmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoolmanagerService]
    });
  });

  it('should be created', inject([PoolmanagerService], (service: PoolmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
