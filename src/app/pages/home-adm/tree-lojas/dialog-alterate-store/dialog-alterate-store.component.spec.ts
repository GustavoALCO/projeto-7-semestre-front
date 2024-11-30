import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlterateStoreComponent } from './dialog-alterate-store.component';

describe('DialogAlterateStoreComponent', () => {
  let component: DialogAlterateStoreComponent;
  let fixture: ComponentFixture<DialogAlterateStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAlterateStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAlterateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
