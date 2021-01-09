import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaisesComponent } from './modal-paises.component';

describe('ModalPaisesComponent', () => {
  let component: ModalPaisesComponent;
  let fixture: ComponentFixture<ModalPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
