import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { createTodo, initialTodos, Todo } from './model';
import { TodosPageActions } from './state';

@Component({
  selector: 'ako-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  get hasCompletedTodos(): boolean {
    return this.todos.some((todo) => todo.completed);
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodosPageActions.init());
  }

  addTodo(description: string): void {
    const newTodo = createTodo(description);
    this.store.dispatch(TodosPageActions.addTodo({ todo: newTodo }));
  }

  removeTodo(todoToRemove: Todo): void {
    this.store.dispatch(TodosPageActions.removeTodo({ todo: todoToRemove }));
  }

  markAsCompleted(todoToMark: Todo): void {
    this.store.dispatch(TodosPageActions.markAsCompleted({ todo: todoToMark }));
  }

  markAsPending(todoToMark: Todo): void {
    this.store.dispatch(TodosPageActions.markAsPending({ todo: todoToMark }));
  }

  clearCompleted(): void {
    this.store.dispatch(TodosPageActions.clearCompleted());
  }
}
