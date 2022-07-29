import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ako-root',
  template: `
    <ako-fake-backend-toogle></ako-fake-backend-toogle>
    <ako-todos></ako-todos>
    <ako-notifications-container></ako-notifications-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
