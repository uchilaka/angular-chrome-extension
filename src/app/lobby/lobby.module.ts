import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './lobby.component';
import { RouterModule } from '@angular/router';
import { ButtonContextModule } from '@tina/components';

@NgModule({
  declarations: [LobbyComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonContextModule
  ]
})
export class LobbyModule { }
