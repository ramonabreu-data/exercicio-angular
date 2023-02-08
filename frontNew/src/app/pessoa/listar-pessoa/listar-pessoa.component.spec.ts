import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

import { ListarPessoaComponent } from './listar-pessoa.component';

describe('ListarPessoaComponent', () => {
  let component: ListarPessoaComponent;
  let fixture: ComponentFixture<ListarPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve retornar a lista de pessoas corretamente', () => {
    const pessoaService = TestBed.get(PessoaService);
    spyOn(pessoaService, 'listarTodos').and.returnValue([new Pessoa(undefined)]);
    const component = TestBed.createComponent(ListarPessoaComponent).componentInstance;
    component.ngOnInit();
    expect(component.pessoas).toEqual([new Pessoa(undefined)]);
  });

  it('Deve chamar o método listarTodos no ngOnInit', () => {
    const component = TestBed.createComponent(ListarPessoaComponent).componentInstance;
    spyOn(component, 'listarTodos');
    component.ngOnInit();
    expect(component.listarTodos).toHaveBeenCalled();
  });

  it('Deve injetar o serviço PessoaService corretamente', () => {
    const pessoaService = TestBed.get(PessoaService);
    expect(pessoaService).toBeTruthy();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
