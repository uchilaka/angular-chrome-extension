import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFontAwesomeModule } from '@larcity/ng-font-awesome';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { StartModule } from './containers/start/start.module';
import { LobbyModule } from './containers/lobby/lobby.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent],
  exports: [MyFontAwesomeModule]
})
export class AppModule { }
