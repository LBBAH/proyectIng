import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewPrivilegioComponent } from './dialog-new-privilegio.component';

describe('DialogNewPrivilegioComponent', () => {
  let component: DialogNewPrivilegioComponent;
  let fixture: ComponentFixture<DialogNewPrivilegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewPrivilegioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewPrivilegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
