import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState, todosStateFeatureKey } from './todos.reducer';

const todosState = createFeatureSelector<TodosState>(todosStateFeatureKey);

export const todos = createSelector(
  todosState,
  (todosState) => todosState.todos
);

export const hasCompletedTodos = createSelector(todos, (todos) =>
  todos.some((todo) => todo.completed)
);
