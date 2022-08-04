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

export const addTodoSuccess = createAction(
  '[Todos API] Add Todo Success',
  props<{ todo: Todo }>()
);
export const addTodoError = createAction(
  '[Todos API] Add Todo Error',
  props<{ errorMessage: string }>()
);

export const markAsCompletedSuccess = createAction(
  '[Todos API] Mark Todo As Completed Success'
);
export const markAsCompletedError = createAction(
  '[Todos API] Mark Todo As Completed Error',
  props<{ todo: Todo; errorMessage: string }>()
);
