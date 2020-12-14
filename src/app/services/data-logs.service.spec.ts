import { TestBed } from '@angular/core/testing';

import { DataLogsService } from './data-logs.service';

describe('DataLogsService', () => {
  let service: DataLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
