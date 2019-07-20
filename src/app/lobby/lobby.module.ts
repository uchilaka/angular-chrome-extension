import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './lobby.component';
import { RouterModule } from '@angular/router';
import { ButtonFabModule } from 'shared-components';
import { MyFontAwesomeModule } from 'my-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
