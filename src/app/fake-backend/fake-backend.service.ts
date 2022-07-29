import {
  HttpBackend,
  HttpEvent,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { initialTodos, Todo } from '../todos/model';
import { createErrorResponse, createSuccesfulResponse } from './helpers';

@Injectable()
export class FakeBackend extends HttpBackend {
  private online = new BehaviorSubject<boolean>(true);
  serverStatus$ = this.online.asObservable();

  constructor() {
    super();
  }

  toggleServer(): void {
    this.online.next(!this.online.value);
  }

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (this.online.value === false) {
      return createErrorResponse(req);
    }

    if (req.url === 'todos' && req.method === 'GET') {
      return createSuccesfulResponse<Todo[]>(initialTodos);
    }

    if (req.url === 'todos' && req.method === 'POST') {
      return createSuccesfulResponse<Todo>(
        req.body['todo'],
        HttpStatusCode.Created
      );
    }

    if (req.url.match(/^todos\/\w*$/) && req.method === 'DELETE') {
      return createSuccesfulResponse('', HttpStatusCode.NoContent);
    }

    if (req.url.match(/^todos\/\w*$/) && req.method === 'PUT') {
      return createSuccesfulResponse(req.body['todo'], HttpStatusCode.Ok);
    }

    if (req.url === 'todos:batchDelete' && req.method === 'POST') {
      return createSuccesfulResponse('', HttpStatusCode.NoContent);
    }

    console.error(`FakeBackend - No handler for ${req.method} ${req.url}`);
    return of();
  }
}
