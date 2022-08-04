import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, of, tap } from 'rxjs';
import { NotificationsService } from 'src/app/notifications/notifications.service';
import { TodosApiActions, TodosPageActions } from '.';
import { TodosService } from '../todos.service';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private todosService: TodosService,
    private notificationsService: NotificationsService
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosPageActions.init),
      exhaustMap((initAction) =>
        this.todosService.getAll().pipe(
          map((todos) => TodosApiActions.loadAllSuccess({ todos })),
          catchError(() =>
            of(
              TodosApiActions.loadAllError({
                errorMessage:
                  'Ha ocurrido un error al intentar obtener el listado de tareas.',
              })
            )
          )
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosPageActions.addTodo),
      concatMap((action) =>
        this.todosService.create(action.todo).pipe(
          map((savedTodo) =>
            TodosApiActions.addTodoSuccess({ todo: savedTodo })
          ),
          catchError(() =>
            of(
              TodosApiActions.addTodoError({
                errorMessage: `Ha ocurrido un error al intentar guardar la tarea: "${action.todo.description}"`,
              })
            )
          )
        )
      )
    )
  );

  notifyApiError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosApiActions.loadAllError, TodosApiActions.addTodoError),
        tap((action) => this.notificationsService.error(action.errorMessage))
      ),
    { dispatch: false }
  );
}
