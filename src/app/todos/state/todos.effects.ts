import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
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

  notifyApiError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodosApiActions.loadAllError),
        tap((action) => this.notificationsService.error(action.errorMessage))
      ),
    { dispatch: false }
  );
}
