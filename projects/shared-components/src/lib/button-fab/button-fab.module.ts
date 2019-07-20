import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonContextComponent } from './button-context.component';
import { MyFontAwesomeModule } from '@larcity/ng-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ButtonContextComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MyFontAwesomeModule
  ],
  exports: [ButtonContextComponent]
})
export class ButtonFabModule { }
