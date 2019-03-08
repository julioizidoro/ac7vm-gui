import { TestBed } from '@angular/core/testing';

import { FornecedoresService } from './fornecedores.service';

describe('ClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FornecedoresService = TestBed.get(FornecedoresService);
    expect(service).toBeTruthy();
  });
});
