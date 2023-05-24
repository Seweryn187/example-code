import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotifitacionService {

  constructor(private notification: NzNotificationService) { }

  public createErrorNotyfication(error: string | undefined): void {
    this.notification.create(
      'error',
      'Error',
      `There was a problem with your search - ${error}. Try again with diffrent parameters`
    );
  }
}
