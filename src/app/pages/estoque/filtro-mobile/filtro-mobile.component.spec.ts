import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMobileComponent } from './filtro-mobile.component';

describe('FiltroMobileComponent', () => {
  let component: FiltroMobileComponent;
  let fixture: ComponentFixture<FiltroMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
