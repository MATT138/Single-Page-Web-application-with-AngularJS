import { TestBed } from '@angular/core/testing';

import { DatabaseConnectService } from './database-connect.service';

describe('DatabaseConnectService', () => {
  let service: DatabaseConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
