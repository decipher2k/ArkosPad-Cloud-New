import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmarkupComponent } from './editmarkup.component';

describe('EditmarkupComponent', () => {
  let component: EditmarkupComponent;
  let fixture: ComponentFixture<EditmarkupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmarkupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
