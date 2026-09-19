import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { TimeCadastro } from './pages/time-cadastro/time-cadastro';
import { TimeConsulta } from './pages/time-consulta/time-consulta';
import { JogoCadastro } from './pages/jogo-cadastro/jogo-cadastro';
import { JogoConsulta } from './pages/jogo-consulta/jogo-consulta';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'times', component: TimeConsulta },
    { path: 'times/novo', component: TimeCadastro },
    { path: 'time/:id', component: TimeCadastro },
    { path: 'jogos', component: JogoConsulta },
    { path: 'jogos/novo', component: JogoCadastro },
    { path: 'jogos/novo/:id', component: JogoCadastro },
];
