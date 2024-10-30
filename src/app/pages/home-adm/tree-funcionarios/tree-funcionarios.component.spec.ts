import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFuncionariosComponent } from './tree-funcionarios.component';

describe('TreeFuncionariosComponent', () => {
  let component: TreeFuncionariosComponent;
  let fixture: ComponentFixture<TreeFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeFuncionariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
