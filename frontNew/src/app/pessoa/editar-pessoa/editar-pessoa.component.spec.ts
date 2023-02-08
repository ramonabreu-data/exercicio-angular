import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';

describe('PessoaDetalhe', () => {
  let component: any;
  let fixture: ComponentFixture<any>;
  let pessoaService: PessoaService;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PessoaService,
          useValue: { buscarPorId: () => of({ id: 1, nome: 'Teste' }), atualizar: () => {} },
        },
        {
          provide: Router,
          useValue: { navigate: () => {} },
        },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 1 } } },
        },
      ],
    });

    component = fixture.componentInstance;
    pessoaService = TestBed.inject(PessoaService);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  });

  it(' ngOnInit', () => {
    component.ngOnInit();
    expect(component.pessoa).toEqual({ id: 1, nome: 'Teste' });
  });

  it('atualizar', () => {
    spyOn(pessoaService, 'atualizar').and.callThrough();
    spyOn(router, 'navigate').and.callThrough();
    component.formPessoa = new FormGroup({
      nome: new FormControl(),
    });
    component.formPessoa.markAsTouched();
    component.formPessoa.markAsDirty();
    component.formPessoa.setValue({ nome: 'Teste' });
    component.atualizar();
    expect(pessoaService.atualizar).toHaveBeenCalledWith({ id: 1, nome: 'Teste' });
    expect(router.navigate).toHaveBeenCalledWith(['/pessoas']);
  });
});
