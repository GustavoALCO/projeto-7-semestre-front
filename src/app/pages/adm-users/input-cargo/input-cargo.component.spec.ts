import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCargoComponent } from './input-cargo.component';

describe('InputCargoComponent', () => {
  let component: InputCargoComponent;
  let fixture: ComponentFixture<InputCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCargoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
