import connection from "./connection.js";


export async function salvarTime(time) {
    let comando = `
    INSERT INTO time (nome, sigla, qtd_copas, ranking_fifa, ativo, data_fundacao)
    VALUES (?, ?, ?, ?, ?, ?);
    `

    const [resposta] = await connection.query(comando, [
        time.nome,
        time.sigla,
        time.qtd_copas,
        time.ranking_fifa,
        time.ativo,
        time.data_fundacao
    ])

    return resposta.insertId;
}

export async function buscarPorSigla(time) {
    let comando = `
    SELECT * FROM
        time
    WHERE sigla = ?
    `

    const [resposta] = await connection.query(comando, [time.sigla]);

    return resposta[0];
}


export async function listarTime() {
    let comando = `
    SELECT * FROM
        time
    `

    const [linhas] = await connection.query(comando);

    return linhas
}


export async function buscarTimePorId(id) {
    let comando = `
    SELECT * FROM
        time
    WHERE id = ?
    `

    const [linhas] = await connection.query(comando, [id]);

    return linhas[0];
}


export async function alterarTime(id, time) {
    let comando = `
    UPDATE time
    SET nome = ?,
        sigla = ?,
        qtd_copas = ?,
        ranking_fifa = ?,
        ativo = ?
    WHERE id = ?
    `

    const [resposta] = await connection.query(comando, [
        time.nome,
        time.sigla,
        time.qtd_copas,
        time.ranking_fifa,
        time.ativo,
        id
    ])

    return resposta.affectedRows;
}


export async function deletarTime(id) {
    let comando = `
    DELETE FROM 
        time
    WHERE id = ?
    `

    const [resposta] = await connection.query(comando, [id]);

    return resposta.affectedRows;
}