import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-consulta',
  imports: [],
  templateUrl: './time-consulta.html',
  styleUrl: './time-consulta.css',
})
export class TimeConsulta implements OnInit {
  listaTimes: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(): void {
    this.http.get<any[]>('http://localhost:3000/time')
      .subscribe( res => {
        this.listaTimes = res;
      });
  }

  remover(id: number): void {
    this.http.delete(`http://localhost:3000/time/${id}`)
      .subscribe(() => {
        alert('Time removido com sucesso!');
        this.buscar();
      }, error => {
        alert('Erro ao remover time: ' + error.error.erro);
        console.log(error);
      });
  }

  editar(id: number): void {
    this.router.navigate([`/time/${id}`]);
  }
}
