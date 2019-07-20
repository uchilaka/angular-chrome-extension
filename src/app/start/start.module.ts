import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyFontAwesomeModule } from '@larcity/ng-font-awesome';
import { ButtonFabModule } from '@larcity/ng-chrome-shared-components';
import { StartComponent } from './start.component';
import { RouterModule } from '@angular/router';

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
