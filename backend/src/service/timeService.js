import * as timeRepository from '../repository/timeRepository.js';


export async function salvarTime(time) {

    if (time.sigla.length > 3) {
        throw new Error('A sigla deve ter 3 caracteres.');
    }

    if (time.qtd_copas < 0) {
        throw new Error('A quantidade de copas não pode ser negativa.');
    }

    if (time.ranking_fifa <= 0) {
        throw new Error('O ranking da FIFA deve ser maior que zero.');
    }

    let siglaExistente = await timeRepository.buscarPorSigla(time);
    if (siglaExistente) {
        throw new Error('Sigla já cadastrada.');
    }

    let id = await timeRepository.salvarTime(time);

    return id;
}


export async function listarTime() {
    let linhas = await timeRepository.listarTime();

    return linhas;
}


export async function buscarTimePorId(id) {
    let linhas = await timeRepository.buscarTimePorId(id);

    return linhas;
}


export async function alterarTime(id, time) {
    let linhasAfetadas = await timeRepository.alterarTime(id, time);

    return linhasAfetadas;
}


export async function deletarTime(id) {
    let linhasAfetadas = await timeRepository.deletarTime(id);

    return linhasAfetadas;
}