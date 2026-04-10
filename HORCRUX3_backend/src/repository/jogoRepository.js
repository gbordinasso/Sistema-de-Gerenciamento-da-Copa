import connection from "./connection.js";


export async function salvarJogo(jogo) {
    let comando = `
    INSERT INTO jogo (id_time_mandante, id_time_visitante, nr_gols_mandante, nr_gols_visitante, publico_pagante, renda_total, realizado, data_jogo)
    VALUES (?, ?, ?, ?, ?, ?, ?, NOW());
    `

    const [resposta] = await connection.query(comando, [
        jogo.id_time_mandante,
        jogo.id_time_visitante,
        jogo.nr_gols_mandante,
        jogo.nr_gols_visitante,
        jogo.publico_pagante,
        jogo.renda_total,
        jogo.realizado
    ])

    return resposta.insertId;
}


export async function listarJogo() {
    let comando = `
    SELECT * FROM
        jogo
    `

    const [linhas] = await connection.query(comando);

    return linhas
}


export async function buscarJogoPorId(id) {
    let comando = `
    SELECT * FROM
        jogo
    WHERE id = ?
    `

    const [linhas] = await connection.query(comando, [id]);

    return linhas[0];
}


export async function alterarJogo(id, jogo) {
    let comando = `
    UPDATE jogo
    SET id_time_mandante = ?,
        id_time_visitante = ?,
        nr_gols_mandante = ?,
        nr_gols_visitante = ?,
        publico_pagante = ?,
        renda_total = ?,
        realizado = ?
    WHERE id = ?
    `

    const [resposta] = await connection.query(comando, [
        jogo.id_time_mandante,
        jogo.id_time_visitante,
        jogo.nr_gols_mandante,
        jogo.nr_gols_visitante,
        jogo.publico_pagante,
        jogo.renda_total,
        jogo.realizado,
        id
    ])

    return resposta.affectedRows;
}


export async function deletarJogo(id) {
    let comando = `
    DELETE FROM 
        jogo
    WHERE id = ?
    `

    const [resposta] = await connection.query(comando, [id]);

    return resposta.affectedRows;
}