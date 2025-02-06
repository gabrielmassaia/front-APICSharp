import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Consumir-Api';
  http = inject(HttpClient);
  urlApi = 'https://localhost:7251';
  pessoas: Pessoa[] = [];

  ngOnInit(): void {
    this.obterPessoas();
  }

  obterPessoas() {
    this.http.get<Pessoa[]>(`${this.urlApi}/pessoas`)
      .subscribe(pessoas => this.pessoas = pessoas)
  }
}
