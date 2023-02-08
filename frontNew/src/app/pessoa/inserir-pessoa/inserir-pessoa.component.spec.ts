import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

import { InserirPessoaComponent } from './inserir-pessoa.component';

describe('InserirPessoaComponent', () => {
  let component: InserirPessoaComponent;
  let fixture: ComponentFixture<InserirPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inserir uma pessoa se o formulário for válido', () => {
    const pessoaService = TestBed.get(PessoaService);
    spyOn(pessoaService, 'inserir');
    const component = TestBed.createComponent(InserirPessoaComponent).componentInstance;
    component.formPessoa.form.setValue({ nome: 'TRamon', cargo: 'TAdvogado', Setor:'TVara'});
    component.inserir();
    expect(pessoaService.inserir).toHaveBeenCalledWith(new Pessoa());
  });
  
  it('Não deve inserir uma pessoa se o formulário não for válido', () => {
    const pessoaService = TestBed.get(PessoaService);
    spyOn(pessoaService, 'inserir');
    const component = TestBed.createComponent(InserirPessoaComponent).componentInstance;
    component.formPessoa.form.setValue({ nome: '', cargo: '',setor:'' });
    component.inserir();
    expect(pessoaService.inserir).not.toHaveBeenCalled();
  });

  it('Deve navegar para "/pessoas" após a inserção da pessoa', () => {
    const pessoaService = TestBed.get(PessoaService);
    spyOn(pessoaService, 'inserir');
    const router = TestBed.get(Router);
    spyOn(router, 'navigate');
    const component = TestBed.createComponent(InserirPessoaComponent).componentInstance;
    component.formPessoa.form.setValue({nome: '', cargo: '', Setor:'' });
    component.inserir();
    expect(router.navigate).toHaveBeenCalledWith(['/pessoas']);
  });

  it('Deve injetar o serviço PessoaService corretamente', () => {
    const pessoaService = TestBed.get(PessoaService);
    expect(pessoaService).toBeTruthy();
  });

  it('Deve injetar o serviço Router corretamente', () => {
    const router = TestBed.get(Router);
    expect(router).toBeTruthy();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
