import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPrestamosComponent } from './modal-editar-prestamos.component';

describe('ModalEditarPrestamosComponent', () => {
  let component: ModalEditarPrestamosComponent;
  let fixture: ComponentFixture<ModalEditarPrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarPrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
