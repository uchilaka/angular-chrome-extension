import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyFontAwesomeModule } from '@larcity/ng-font-awesome';
import { ButtonFabModule } from 'shared-components';
import { StartComponent } from './start.component';

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
