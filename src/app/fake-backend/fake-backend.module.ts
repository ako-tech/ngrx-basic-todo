import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FakeBackendToggleComponent } from './fake-backend-toggle.component';

@NgModule({
  declarations: [FakeBackendToggleComponent],
  imports: [CommonModule],
  exports: [FakeBackendToggleComponent],
})
export class FakeBackendModule {}
