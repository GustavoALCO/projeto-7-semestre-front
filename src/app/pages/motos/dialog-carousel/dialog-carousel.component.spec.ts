import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCarouselComponent } from './dialog-carousel.component';

describe('DialogCarouselComponent', () => {
  let component: DialogCarouselComponent;
  let fixture: ComponentFixture<DialogCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
