import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  state('in', style({ opacity: 1, transform: 'translateY(0)' })),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(0)' })),
  ]),
]);
