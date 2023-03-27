import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypesRecurComponent } from './new-types-recur.component';

describe('NewTypesRecurComponent', () => {
  let component: NewTypesRecurComponent;
  let fixture: ComponentFixture<NewTypesRecurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTypesRecurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTypesRecurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
