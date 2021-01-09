import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarLibrosComponent } from './modal-editar-libros.component';

describe('ModalEditarLibrosComponent', () => {
  let component: ModalEditarLibrosComponent;
  let fixture: ComponentFixture<ModalEditarLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
