import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeLojasComponent } from './tree-lojas.component';

describe('TreeLojasComponent', () => {
  let component: TreeLojasComponent;
  let fixture: ComponentFixture<TreeLojasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeLojasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
