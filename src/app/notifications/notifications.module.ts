import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotificationsContainerComponent } from './notifications-container/notifications-container.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [NotificationComponent, NotificationsContainerComponent],
  imports: [CommonModule],
  exports: [NotificationsContainerComponent],
})
export class NotificationsModule {}
