import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemarkupComponent } from './deletemarkup.component';

describe('DeletemarkupComponent', () => {
  let component: DeletemarkupComponent;
  let fixture: ComponentFixture<DeletemarkupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemarkupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
