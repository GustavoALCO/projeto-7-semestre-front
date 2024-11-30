import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsersPasswordComponent } from './dialog-users-password.component';

describe('DialogUsersPasswordComponent', () => {
  let component: DialogUsersPasswordComponent;
  let fixture: ComponentFixture<DialogUsersPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUsersPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUsersPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
