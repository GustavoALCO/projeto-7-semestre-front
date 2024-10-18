import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselLojasComponent } from './carousel-lojas.component';

describe('CarouselLojasComponent', () => {
  let component: CarouselLojasComponent;
  let fixture: ComponentFixture<CarouselLojasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselLojasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
