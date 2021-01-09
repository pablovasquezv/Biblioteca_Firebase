import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngresoPrestamosComponent } from './modal-ingreso-prestamos.component';

describe('ModalIngresoPrestamosComponent', () => {
  let component: ModalIngresoPrestamosComponent;
  let fixture: ComponentFixture<ModalIngresoPrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIngresoPrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIngresoPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
