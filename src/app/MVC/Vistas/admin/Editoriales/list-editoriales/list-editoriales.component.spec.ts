import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditorialesComponent } from './list-editoriales.component';

describe('ListEditorialesComponent', () => {
  let component: ListEditorialesComponent;
  let fixture: ComponentFixture<ListEditorialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEditorialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
