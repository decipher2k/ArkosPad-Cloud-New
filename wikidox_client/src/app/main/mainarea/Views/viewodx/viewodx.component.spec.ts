import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewodxComponent } from './viewodx.component';

describe('ViewodxComponent', () => {
  let component: ViewodxComponent;
  let fixture: ComponentFixture<ViewodxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewodxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewodxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
