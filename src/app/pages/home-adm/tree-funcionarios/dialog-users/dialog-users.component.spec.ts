import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsersComponent } from './dialog-users.component';

describe('DialogUsersComponent', () => {
  let component: DialogUsersComponent;
  let fixture: ComponentFixture<DialogUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
