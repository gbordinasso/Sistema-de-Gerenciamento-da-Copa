import * as jogoRepository from '../repository/jogoRepository.js';


export async function salvarJogo(jogo) {

    if (jogo.id_time_mandante == jogo.id_time_visitante) {
        throw new Error('Os times não pode ser o mesmo.');
    }

    if (jogo.nr_gols_mandante < 0 || jogo.nr_gols_visitante < 0) {
        throw new Error('O número de gols não pode ser negativo.');
    }

    if (jogo.publico_pagante < 0) {
        throw new Error('Público inválido.');
    }

    if (jogo.renda_total < 0) {
        throw new Error('Renda total inválida.');
    }

    let dataMinima = new Date('1900-01-01');
    let dataJogo = new Date(jogo.data_jogo);
    
    if (dataJogo < dataMinima) {
        throw new Error('Data do jogo inválida.');
    }

    let id = await jogoRepository.salvarJogo(jogo);

    return id;
}


export async function listarJogo() {
    let linhas = await jogoRepository.listarJogo();

    return linhas;
}


export async function buscarJogoPorId(id) {
    let linhas = await jogoRepository.buscarJogoPorId(id);

    return linhas;
}


export async function alterarJogo(id, jogo) {
    let linhasAfetadas = await jogoRepository.alterarJogo(id, jogo);

    return linhasAfetadas;
}


export async function deletarJogo(id) {
    let linhasAfetadas = await jogoRepository.deletarJogo(id);

    return linhasAfetadas;
}