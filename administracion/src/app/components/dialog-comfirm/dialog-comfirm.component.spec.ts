import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComfirmComponent } from './dialog-comfirm.component';

describe('DialogComfirmComponent', () => {
  let component: DialogComfirmComponent;
  let fixture: ComponentFixture<DialogComfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
