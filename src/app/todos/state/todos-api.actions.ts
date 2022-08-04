import { createAction, props } from '@ngrx/store';
import { Todo } from '../model';

export const loadAllSuccess = createAction(
  '[Todos API] Load All Success',
  props<{ todos: Todo[] }>()
);
export const loadAllError = createAction(
  '[Todos API] Load All Error',
  props<{ errorMessage: string }>()
);
