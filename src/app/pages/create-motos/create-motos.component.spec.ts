import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMotosComponent } from './create-motos.component';

describe('CreateMotosComponent', () => {
  let component: CreateMotosComponent;
  let fixture: ComponentFixture<CreateMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
