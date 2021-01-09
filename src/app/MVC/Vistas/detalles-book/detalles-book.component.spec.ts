import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBookComponent } from './detalles-book.component';

describe('DetallesBookComponent', () => {
  let component: DetallesBookComponent;
  let fixture: ComponentFixture<DetallesBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
