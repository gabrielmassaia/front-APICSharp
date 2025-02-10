import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pessoa } from './models/pessoa';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Consumir-Api';
  http = inject(HttpClient);
  urlApi = 'https://localhost:7251';
  pessoas$?: Observable<Pessoa[]>

  pessoaEncotrada$?: Observable<Pessoa>;
  valorBuscaPessoa = '';

  ngOnInit(): void {
    this.obterPessoas();
  }

  obterPessoas() {
    this.pessoas$ = this.http
    .get<Pessoa[]>(`${this.urlApi}/pessoas`)
  }

  obterPessoaEspecifica() {

    if(!this.valorBuscaPessoa) {
      return;
    }

    this.pessoaEncotrada$ = this.http
    .get<Pessoa>(`${this.urlApi}/pessoas/${this.valorBuscaPessoa}`)
  }
}
