import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { RouterModule } from '@angular/router';
import { ButtonFabModule } from 'shared-components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyFontAwesomeModule } from 'projects/my-font-awesome/src/public-api';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonFabModule,
    MyFontAwesomeModule
  ],
  exports: [StartComponent, MyFontAwesomeModule]
})
export class StartModule { }
