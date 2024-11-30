import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteStoreComponent } from './dialog-delete-store.component';

describe('DialogDeleteStoreComponent', () => {
  let component: DialogDeleteStoreComponent;
  let fixture: ComponentFixture<DialogDeleteStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
