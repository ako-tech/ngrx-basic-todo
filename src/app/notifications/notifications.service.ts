import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification, NotificationType } from './model';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private publisher = new Subject<Notification>();
  feed$ = this.publisher.asObservable();

  constructor() {}

  success(message: string): void {
    this.publisher.next({
      type: NotificationType.success,
      message,
    });
  }

  error(message: string): void {
    this.publisher.next({
      type: NotificationType.error,
      message,
    });
  }
}
