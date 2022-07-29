export enum NotificationType {
  success,
  error,
}

export interface Notification {
  type: NotificationType;
  message: string;
}
