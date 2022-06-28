import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { createTodo, initialTodos, Todo } from './model';

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

  constructor() {}

  ngOnInit(): void {
    this.todos = initialTodos;
  }

  addTodo(description: string): void {
    const newTodo = createTodo(description);
    this.todos = [...this.todos, newTodo];
  }

  removeTodo(todoToRemove: Todo): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoToRemove.id);
  }

  markAsCompleted(todoToMark: Todo): void {
    this.todos = this.todos.map((todo) =>
      todo.id === todoToMark.id ? { ...todo, completed: true } : todo
    );
  }

  markAsPending(todoToMark: Todo): void {
    this.todos = this.todos.map((todo) =>
      todo.id === todoToMark.id ? { ...todo, completed: false } : todo
    );
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => todo.completed === false);
  }
}
