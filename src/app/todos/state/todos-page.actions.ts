import { createAction, props } from '@ngrx/store';
import { Todo } from '../model';

export const init = createAction('[Todos Page] Init');

export const addTodo = createAction(
  '[Todos Page] Add Todo',
  props<{ todo: Todo }>()
);

export const removeTodo = createAction(
  '[Todos Page] Remove Todo',
  props<{ todo: Todo }>()
);

export const markAsCompleted = createAction(
  '[Todos Page] Mark as Completed',
  props<{ todo: Todo }>()
);

export const markAsPending = createAction(
  '[Todos Page] Mark as Pending',
  props<{ todo: Todo }>()
);

export const clearCompleted = createAction('[Todos Page] Clear Completed');

export const selectTodo = createAction(
  '[Todos Page] Select Todo',
  props<{ todo: Todo }>()
);
