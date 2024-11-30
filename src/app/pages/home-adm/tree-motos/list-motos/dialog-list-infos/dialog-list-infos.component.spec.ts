import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListInfosComponent } from './dialog-list-infos.component';

describe('DialogListInfosComponent', () => {
  let component: DialogListInfosComponent;
  let fixture: ComponentFixture<DialogListInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogListInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogListInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
