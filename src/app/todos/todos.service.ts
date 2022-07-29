import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './model';

@Injectable({ providedIn: 'root' })
export class TodosService {
  baseUrl = 'todos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, { todo });
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseUrl}/${todo.id}`, { todo });
  }

  delete(todo: Todo): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${todo.id}`);
  }

  deleteMany(todos: Todo[]): Observable<void> {
    const ids = todos.map((todo) => todo.id);
    return this.http.post<void>(`${this.baseUrl}:batchDelete`, { ids });
  }
}
