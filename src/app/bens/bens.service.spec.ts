import { TestBed } from '@angular/core/testing';

import { BensService } from './bens.service';

describe('BensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BensService = TestBed.get(BensService);
    expect(service).toBeTruthy();
  });
});
