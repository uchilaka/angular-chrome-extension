import { Component, Input, Output } from '@angular/core';
import { ButtonStyles } from '../../models/button-style.model';

@Component({
  selector: 'lib-button-fab',
  templateUrl: './button-context.component.html',
  styleUrls: ['./button-context.component.scss']
})
export class ButtonContextComponent {
  @Input()
  buttonIcon: string[] = ['fas', 'plus'];

  @Input()
  buttonStyle: ButtonStyles = ButtonStyles.PRIMARY;

  @Input()
  outline = false;

  @Output()
  get buttonStyleClass() {
    return this.outline
      ? this.outlineOfStyle(this.buttonStyle)
      : this.buttonStyle;
  }

  outlineOfStyle(style: ButtonStyles) {
    return style.replace('btn-', 'btn-outline-');
  }
}
