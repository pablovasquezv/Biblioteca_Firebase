import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAutoresComponent } from './modal-autores.component';

describe('ModalAutoresComponent', () => {
  let component: ModalAutoresComponent;
  let fixture: ComponentFixture<ModalAutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
