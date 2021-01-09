import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLibrosComponent } from './modal-libros.component';

describe('ModalLibrosComponent', () => {
  let component: ModalLibrosComponent;
  let fixture: ComponentFixture<ModalLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
