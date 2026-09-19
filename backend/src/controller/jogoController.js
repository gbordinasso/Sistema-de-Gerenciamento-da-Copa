import { Router } from 'express';
import * as jogoService from '../service/jogoService.js';


const endpoints = Router();


endpoints.post('/jogo', async (req, resp) => {
    try {
        let jogo = req.body;

        let id = await jogoService.salvarJogo(jogo);

        resp.status(201).send({
            id: id
        })
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


endpoints.get('/jogo', async (req, resp) => {

    let linha = await jogoService.listarJogo();

    resp.status(200).send(linha);
})


endpoints.get('/jogo/:id', async (req, resp) => {
    let id = Number(req.params.id);

    let linha = await jogoService.buscarJogoPorId(id);

    if (!linha) {
        resp.status(404).send({
            erro: 'Jogo não encontrado.'
        })
    } else {
        resp.status(200).send(linha)
    }
})


endpoints.put('/jogo/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let time = req.body;

    let linhasAfetadas = await jogoService.alterarJogo(id, time);

    if (linhasAfetadas == 0) {
        resp.status(404).send({
            erro: 'Jogo não encontrado.'
        })
    } else {
        resp.status(200).send();
    }
})


endpoints.delete('/jogo/:id', async (req, resp) => {
    let id = Number(req.params.id);

    let linhasAfetadas = await jogoService.deletarJogo(id);

    if (linhasAfetadas == 0) {
        resp.status(404).send({
            erro: 'Jogo não encontrado.'
        })
    } else {
        resp.status(204).send()
    }
})



export default endpoints;