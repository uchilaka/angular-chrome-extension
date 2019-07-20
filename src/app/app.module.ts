import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFontAwesomeModule } from 'my-font-awesome';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { StartModule } from './start/start.module';
import { LobbyModule } from './lobby/lobby.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MyFontAwesomeModule,
    StartModule,
    LobbyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MyFontAwesomeModule]
})
export class AppModule { }
