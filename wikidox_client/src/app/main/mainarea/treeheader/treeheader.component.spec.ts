import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeheaderComponent } from './treeheader.component';

describe('TreeheaderComponent', () => {
  let component: TreeheaderComponent;
  let fixture: ComponentFixture<TreeheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
