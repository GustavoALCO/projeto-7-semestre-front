import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLojaComponent } from './input-loja.component';

describe('InputLojaComponent', () => {
  let component: InputLojaComponent;
  let fixture: ComponentFixture<InputLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
