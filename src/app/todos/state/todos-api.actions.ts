import { createAction, props } from '@ngrx/store';
import { Todo } from '../model';

export const loadAllSuccess = createAction(
  '[Todos API] Load All Success',
  props<{ todos: Todo[] }>()
);
