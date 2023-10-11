import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmarkupComponent } from './viewmarkup.component';

describe('ViewmarkupComponent', () => {
  let component: ViewmarkupComponent;
  let fixture: ComponentFixture<ViewmarkupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmarkupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
