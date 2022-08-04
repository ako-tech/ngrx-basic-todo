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

export const removeTodoSuccess = createAction(
  '[Todos API] Remove Todo Success',
  props<{ todo: Todo }>()
);
export const removeTodoError = createAction(
  '[Todos API] Remove Todo Error',
  props<{ errorMessage: string }>()
);

export const markAsCompletedSuccess = createAction(
  '[Todos API] Mark Todo As Completed Success'
);
export const markAsCompletedError = createAction(
  '[Todos API] Mark Todo As Completed Error',
  props<{ todo: Todo; errorMessage: string }>()
);

export const markAsPendingSuccess = createAction(
  '[Todos API] Mark Todo As Pending Success'
);
export const markAsPendingError = createAction(
  '[Todos API] Mark Todo As Pending Error',
  props<{ todo: Todo; errorMessage: string }>()
);

export const clearCompletedSuccess = createAction(
  '[Todos API] Clear Completed Success',
  props<{ deletedTodos: Todo[] }>()
);
export const clearCompletedError = createAction(
  '[Todos API] Clear Completed Error',
  props<{ errorMessage: string }>()
);
