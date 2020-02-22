import { TestBed } from '@angular/core/testing';

import { NbpService } from './nbp.service';

describe('NbpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbpService = TestBed.get(NbpService);
    expect(service).toBeTruthy();
  });
});
