import { TestBed } from '@angular/core/testing';

import { NgxSmileService } from './ngx-smile.service';

describe('NgxSmileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSmileService = TestBed.get(NgxSmileService);
    expect(service).toBeTruthy();
  });
});
