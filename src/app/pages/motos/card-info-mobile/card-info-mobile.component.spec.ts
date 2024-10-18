import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoMobileComponent } from './card-info-mobile.component';

describe('CardInfoMobileComponent', () => {
  let component: CardInfoMobileComponent;
  let fixture: ComponentFixture<CardInfoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInfoMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInfoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
