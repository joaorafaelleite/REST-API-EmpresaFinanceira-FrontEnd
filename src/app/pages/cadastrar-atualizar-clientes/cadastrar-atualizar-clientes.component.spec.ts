import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAtualizarClientesComponent } from './cadastrar-atualizar-clientes.component';

describe('CadastrarAtualizarClientesComponent', () => {
  let component: CadastrarAtualizarClientesComponent;
  let fixture: ComponentFixture<CadastrarAtualizarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAtualizarClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAtualizarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
