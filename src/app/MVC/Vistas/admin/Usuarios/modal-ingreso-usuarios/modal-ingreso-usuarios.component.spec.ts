import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngresoUsuariosComponent } from './modal-ingreso-usuarios.component';

describe('ModalIngresoUsuariosComponent', () => {
  let component: ModalIngresoUsuariosComponent;
  let fixture: ComponentFixture<ModalIngresoUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIngresoUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIngresoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
