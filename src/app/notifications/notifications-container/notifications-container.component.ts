import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  BehaviorSubject,
  concatMap,
  delay,
  ignoreElements,
  Observable,
  of,
  Subscription,
  tap,
} from 'rxjs';
import { fadeOut, slideIn } from '../animations';
import { Notification } from '../model';
import { NotificationsService } from '../notifications.service';

const NOTIFICATION_DURATION_IN_MS = 5000;
const TIME_BETWEEN_NOTIFICATIONS_IN_MS = 500;

@Component({
  selector: 'ako-notifications-container',
  template: `
    <ako-notification
      *ngIf="currentNotification$ | async as currentNotification"
      [notification]="currentNotification"
      @slideIn
      @fadeOut
    ></ako-notification>
  `,
  styleUrls: ['./notifications-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn, fadeOut],
})
export class NotificationsContainerComponent implements OnInit, OnDestroy {
  notificationsPipeline$ = this.notificationsService.feed$.pipe(
    concatMap((notification) => this.processNotification(notification))
  );
  currentNotification$ = new BehaviorSubject<Notification | null>(null);

  private subscription!: Subscription;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.subscription = this.notificationsPipeline$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  processNotification(notification: Notification): Observable<void> {
    return of(notification).pipe(
      tap((notification) => this.showNotification(notification)),
      delay(NOTIFICATION_DURATION_IN_MS),
      tap(() => this.hideNotification()),
      delay(TIME_BETWEEN_NOTIFICATIONS_IN_MS),
      ignoreElements()
    );
  }

  showNotification(notification: Notification): void {
    this.currentNotification$.next(notification);
  }

  hideNotification(): void {
    this.currentNotification$.next(null);
  }
}
