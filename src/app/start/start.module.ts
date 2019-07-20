import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { RouterModule } from '@angular/router';
import { ButtonFabModule } from 'shared-components';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonFabModule
  ],
  exports: [StartComponent]
})
export class StartModule { }
