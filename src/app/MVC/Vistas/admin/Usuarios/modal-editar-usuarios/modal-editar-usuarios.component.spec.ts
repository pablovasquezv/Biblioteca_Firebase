import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarUsuariosComponent } from './modal-editar-usuarios.component';

describe('ModalEditarUsuariosComponent', () => {
  let component: ModalEditarUsuariosComponent;
  let fixture: ComponentFixture<ModalEditarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
