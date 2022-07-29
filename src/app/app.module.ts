import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpBackend } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { TodosModule } from './todos/todos.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FakeBackend, FakeBackendModule } from './fake-backend';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodosModule,
    FakeBackendModule,
    NotificationsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [{ provide: HttpBackend, useClass: FakeBackend }],
  bootstrap: [AppComponent],
})
export class AppModule {}
