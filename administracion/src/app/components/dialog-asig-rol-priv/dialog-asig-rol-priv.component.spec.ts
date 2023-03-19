import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAsigRolPrivComponent } from './dialog-asig-rol-priv.component';

describe('DialogAsigRolPrivComponent', () => {
  let component: DialogAsigRolPrivComponent;
  let fixture: ComponentFixture<DialogAsigRolPrivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAsigRolPrivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAsigRolPrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
