import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './lobby.component';
import { RouterModule } from '@angular/router';
import { ButtonFabModule } from 'shared-components';

@NgModule({
  declarations: [LobbyComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonFabModule
  ]
})
export class LobbyModule { }
