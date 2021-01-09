import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertasComponent } from './offertas.component';

describe('OffertasComponent', () => {
  let component: OffertasComponent;
  let fixture: ComponentFixture<OffertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
