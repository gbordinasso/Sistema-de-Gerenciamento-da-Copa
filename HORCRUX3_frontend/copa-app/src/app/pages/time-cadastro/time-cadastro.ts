import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-time-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './time-cadastro.html',
  styleUrl: './time-cadastro.css',
})
export class TimeCadastro implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  time: any = {
    nome: '',
    sigla: '',
    qtd_copas: 0,
    ranking_fifa: 0,
    ativo: true,
    data_fundacao: ''
  };

  id: number = 0;


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.buscarPorId();
    }
  }

  buscarPorId() {
    this.http.get<any>(`http://localhost:3000/time/${this.id}`)
      .subscribe(res => {
        if (res.data_fundacao) {
          res.data_fundacao = new Date(res.data_fundacao).toISOString().substring(0, 10);
        }
        this.time = res;
      });
  }

  salvar() {
    if (this.id) {
      this.http.put(`http://localhost:3000/time/${this.id}`, this.time)
        .subscribe(() => {
          alert('Time atualizado com sucesso!');
        });
    } else {
      this.http.post('http://localhost:3000/time', this.time)
        .subscribe(() => {
          alert('Time cadastrado com sucesso!');
        });
    }
  }
}