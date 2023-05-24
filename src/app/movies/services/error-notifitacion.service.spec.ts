import { TestBed } from '@angular/core/testing';

import { ErrorNotifitacionService } from './error-notifitacion.service';

describe('ErrorNotifitacionService', () => {
  let service: ErrorNotifitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorNotifitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
