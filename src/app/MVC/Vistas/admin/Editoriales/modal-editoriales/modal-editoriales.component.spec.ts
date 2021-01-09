import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditorialesComponent } from './modal-editoriales.component';

describe('ModalEditorialesComponent', () => {
  let component: ModalEditorialesComponent;
  let fixture: ComponentFixture<ModalEditorialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditorialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
