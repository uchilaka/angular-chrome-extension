import { TestBed } from '@angular/core/testing';

import { RunContextService } from './run-context.service';

describe('RunContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RunContextService = TestBed.get(RunContextService);
    expect(service).toBeTruthy();
  });
});
