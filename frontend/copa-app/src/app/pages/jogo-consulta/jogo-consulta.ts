import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jogo-consulta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './jogo-consulta.html',
  styleUrl: './jogo-consulta.css',
})
export class JogoConsulta implements OnInit {

  jogos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.http.get<any[]>('http://localhost:3000/jogo')
      .subscribe(res => {
        this.jogos = res;
      });
  }

  remover(id: number) {
    if (confirm('Deseja realmente remover este jogo?')) {
      this.http.delete(`http://localhost:3000/jogo/${id}`)
        .subscribe(() => {
          alert('Jogo removido!');
          this.listar();
        });
    }
  }
}