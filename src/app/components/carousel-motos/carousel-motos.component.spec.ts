import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMotosComponent } from './carousel-motos.component';

describe('CarouselMotosComponent', () => {
  let component: CarouselMotosComponent;
  let fixture: ComponentFixture<CarouselMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
