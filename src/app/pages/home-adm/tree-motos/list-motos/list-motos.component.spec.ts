import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMotosComponent } from './list-motos.component';

describe('ListMotosComponent', () => {
  let component: ListMotosComponent;
  let fixture: ComponentFixture<ListMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
