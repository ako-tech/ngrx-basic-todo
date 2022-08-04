import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { TodosApiActions, TodosPageActions } from '.';
import { TodosService } from '../todos.service';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodosService) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosPageActions.init),
      exhaustMap((initAction) =>
        this.todosService
          .getAll()
          .pipe(map((todos) => TodosApiActions.loadAllSuccess({ todos })))
      )
    )
  );
}
