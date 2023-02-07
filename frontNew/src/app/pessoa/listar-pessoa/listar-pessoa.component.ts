import { Component, OnInit } from '@angular/core';

import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit{

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService){}

  ngOnInit(): void {
      this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[]{
    return this.pessoaService.listarTodos();

    

  }
}

