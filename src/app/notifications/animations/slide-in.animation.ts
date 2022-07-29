import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideIn = trigger('slideIn', [
  state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
  transition(':enter', [
    animate(
      '300ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
]);
