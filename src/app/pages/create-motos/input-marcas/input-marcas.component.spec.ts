import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMarcasComponent } from './input-marcas.component';

describe('InputMarcasComponent', () => {
  let component: InputMarcasComponent;
  let fixture: ComponentFixture<InputMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMarcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
