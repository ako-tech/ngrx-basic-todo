import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';
import { Notification, NotificationType } from '../model';

@Component({
  selector: 'ako-notification',
  template: `{{ notification.message }}`,
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit {
  @Input() notification!: Notification;

  @HostBinding('class.error') get isError() {
    return this.notification.type === NotificationType.error;
  }

  constructor() {}

  ngOnInit(): void {
    if (this.notification === undefined) {
      throw Error(
        'NotificationComponent:ngOnInit - Must supply notification data'
      );
    }
  }
}
