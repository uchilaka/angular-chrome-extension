import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContextComponent } from './button-context.component';

describe('ButtonContextComponent', () => {
  let component: ButtonContextComponent;
  let fixture: ComponentFixture<ButtonContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
