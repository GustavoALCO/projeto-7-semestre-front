import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFuelComponent } from './input-fuel.component';

describe('InputFuelComponent', () => {
  let component: InputFuelComponent;
  let fixture: ComponentFixture<InputFuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFuelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
