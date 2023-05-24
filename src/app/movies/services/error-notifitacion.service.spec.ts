import { TestBed } from '@angular/core/testing';

import { ErrorNotifitacionService } from './error-notifitacion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

describe('ErrorNotifitacionService', () => {
  let service: ErrorNotifitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NzNotificationModule
      ]
    });
    service = TestBed.inject(ErrorNotifitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
