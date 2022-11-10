import { createEntityAdapter, EntityState, Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { TodosPageActions } from '.';
import { initialTodos, Todo } from '../model';

export const todosStateFeatureKey = 'todosState';

export interface TodosState extends EntityState<Todo> {}

export const todosAdapter = createEntityAdapter<Todo>({
  // selectId: (todo) => todo.description,
  // sortComparer: (a, b) => (a.completed < b.completed ? -1 : 1),
});

const initialState: TodosState = todosAdapter.getInitialState();

export const todosReducer = createReducer(
  initialState,
  on(TodosPageActions.init, (currentState) =>
    todosAdapter.setAll(initialTodos, currentState)
  ),
  on(TodosPageActions.addTodo, (currentState, action) =>
    todosAdapter.addOne(action.todo, currentState)
  ),
  on(TodosPageActions.removeTodo, (currentState, action) =>
    todosAdapter.removeOne(action.todo.id, currentState)
  ),
  on(TodosPageActions.markAsCompleted, (currentState, action) => {
    const updateOb: Update<Todo> = {
      id: action.todo.id,
      changes: {
        completed: true,
      },
    };

    return todosAdapter.updateOne(updateOb, currentState);
  }),
  on(TodosPageActions.markAsPending, (currentState, action) => {
    const updateOb: Update<Todo> = {
      id: action.todo.id,
      changes: {
        completed: false,
      },
    };

    return todosAdapter.updateOne(updateOb, currentState);
  }),
  on(TodosPageActions.clearCompleted, (currentState) =>
    todosAdapter.removeMany((todo) => todo.completed === true, currentState)
  )
);
