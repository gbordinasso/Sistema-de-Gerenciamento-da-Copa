import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jogo-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './jogo-cadastro.html',
  styleUrl: './jogo-cadastro.css',
})
export class JogoCadastro implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  jogo: any = {
    id_time_mandante: 0,
    id_time_visitante: 0,
    nr_gols_mandante: 0,
    nr_gols_visitante: 0,
    publico_pagante: 0,
    renda_total: 0,
    realizada: true,
    data_jogo: ''
  };

  id: number = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.buscarPorId();
    }
  }

  buscarPorId() {
    this.http.get<any>(`http://localhost:3000/jogo/${this.id}`)
      .subscribe(res => {

        // 🔥 Ajuste da data para input type="date"
        if (res.data_jogo) {
          res.data_jogo = new Date(res.data_jogo).toISOString().substring(0, 10);
        }

        this.jogo = res;
      });
  }

  salvar() {
    if (this.id) {
      this.http.put(`http://localhost:3000/jogo/${this.id}`, this.jogo)
        .subscribe(() => {
          alert('Jogo atualizado com sucesso!');
        });
    } else {
      this.http.post('http://localhost:3000/jogo', this.jogo)
        .subscribe(() => {
          alert('Jogo cadastrado com sucesso!');
        });
    }
  }
}