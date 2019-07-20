import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyFontAwesomeModule } from '@larcity/ng-font-awesome';
import { ButtonFabModule } from '@larcity/ng-chrome-shared-components';
import { LobbyComponent } from './lobby.component';

@NgModule({
  declarations: [LobbyComponent],
  imports: [
    CommonModule,
    RouterModule,
    MyFontAwesomeModule,
    ButtonFabModule
  ],
  exports: [
    MyFontAwesomeModule
  ]
})
export class LobbyModule { }
