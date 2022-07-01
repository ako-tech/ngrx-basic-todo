import { createReducer, on } from '@ngrx/store';
import { TodosPageActions } from '.';
import { initialTodos, Todo } from '../model';

export const todosStateFeatureKey = 'todosState';

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = createReducer(
  initialState,
  on(TodosPageActions.init, (currentState) => ({
    ...currentState,
    todos: initialTodos,
  })),
  on(TodosPageActions.addTodo, (currentState, action) => ({
    ...currentState,
    todos: [...currentState.todos, action.todo],
  })),
  on(TodosPageActions.removeTodo, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.filter((todo) => todo.id !== action.todo.id),
  })),
  on(TodosPageActions.markAsCompleted, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.map((todo) =>
      todo.id === action.todo.id ? { ...todo, completed: true } : todo
    ),
  })),
  on(TodosPageActions.markAsPending, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.map((todo) =>
      todo.id === action.todo.id ? { ...todo, completed: false } : todo
    ),
  })),
  on(TodosPageActions.clearCompleted, (currentState) => ({
    ...currentState,
    todos: currentState.todos.filter((todo) => todo.completed === false),
  }))
);
