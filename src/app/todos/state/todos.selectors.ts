import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  todosAdapter,
  TodosState,
  todosStateFeatureKey,
} from './todos.reducer';

const todosState = createFeatureSelector<TodosState>(todosStateFeatureKey);

const todosSelectors = todosAdapter.getSelectors();

export const todos = createSelector(todosState, todosSelectors.selectAll);

export const hasCompletedTodos = createSelector(todos, (todos) =>
  todos.some((todo) => todo.completed)
);

export const selectedTodo = createSelector(
  todosState,
  (state) => state.selectedTodo
);
