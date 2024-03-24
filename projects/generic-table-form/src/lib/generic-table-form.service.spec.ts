import { TestBed } from '@angular/core/testing';

import { GenericTableFormService } from './generic-table-form.service';

describe('GenericTableFormService', () => {
  let service: GenericTableFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericTableFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
