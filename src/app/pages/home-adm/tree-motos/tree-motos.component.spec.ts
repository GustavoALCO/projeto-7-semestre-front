import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeMotosComponent } from './tree-motos.component';

describe('TreeMotosComponent', () => {
  let component: TreeMotosComponent;
  let fixture: ComponentFixture<TreeMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
