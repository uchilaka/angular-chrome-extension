import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { ButtonContextModule } from '@tina/components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonContextModule
  ],
  exports: [StartComponent]
})
export class StartModule { }
