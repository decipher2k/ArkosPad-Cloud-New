import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdocxComponent } from './viewdocx.component';

describe('ViewdocxComponent', () => {
  let component: ViewdocxComponent;
  let fixture: ComponentFixture<ViewdocxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdocxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdocxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
