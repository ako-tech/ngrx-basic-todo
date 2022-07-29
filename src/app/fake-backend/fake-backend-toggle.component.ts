import { HttpBackend } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs';
import { FakeBackend } from './fake-backend.service';

@Component({
  selector: 'ako-fake-backend-toogle',
  template: `
    <ng-container *ngIf="status$ | async as status">
      <button
        [class.offline]="status === 'OFFLINE'"
        (click)="toggleServerStatus()"
      >
        {{ status }}
      </button>
    </ng-container>
  `,
  styles: [
    `
      :host {
        position: absolute;
        top: var(--half-separation);
        right: var(--half-separation);
      }
      button {
        padding: 2px var(--half-separation);
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        border: 1px solid #aaa;
        font-weight: 500;
        border-radius: 4px;

        &:hover {
          background-color: #fafafa;
        }

        &::before {
          content: '';
          display: inline-block;
          margin-right: var(--half-separation);
          width: 10px;
          height: 10px;
          background-color: #28a32a;
          border-radius: 50%;
        }

        &.offline::before {
          background-color: #d33535;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: FakeBackend, useExisting: HttpBackend }],
})
export class FakeBackendToggleComponent {
  status$ = this.fakeBackend.serverStatus$.pipe(
    map((status) => (status ? 'ONLINE' : 'OFFLINE'))
  );

  constructor(private fakeBackend: FakeBackend) {}

  toggleServerStatus(): void {
    this.fakeBackend.toggleServer();
  }
}
