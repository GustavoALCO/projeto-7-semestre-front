import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAdmComponent } from './input-adm.component';

describe('InputAdmComponent', () => {
  let component: InputAdmComponent;
  let fixture: ComponentFixture<InputAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
