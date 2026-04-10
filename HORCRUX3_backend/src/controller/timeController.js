import { Router } from 'express';
import * as timeService from '../service/timeService.js';


const endpoints = Router();


endpoints.post('/time', async (req, resp) => {
    try {
        let time = req.body;

        let id = await timeService.salvarTime(time);

        resp.status(201).send({
            id: id
        })
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


endpoints.get('/time', async (req, resp) => {

    let linha = await timeService.listarTime();

    resp.status(200).send(linha);
})


endpoints.get('/time/:id', async (req, resp) => {
    let id = Number(req.params.id);

    let linha = await timeService.buscarTimePorId(id);

    if (!linha) {
        resp.status(404).send({
            erro: 'Time não encontrado.'
        })
    } else {
        resp.status(200).send(linha)
    }
})


endpoints.put('/time/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let time = req.body;

    let linhasAfetadas = await timeService.alterarTime(id, time);

    if (linhasAfetadas == 0) {
        resp.status(404).send({
            erro: 'Time não encontrado.'
        })
    } else {
        resp.status(200).send();
    }
})


endpoints.delete('/time/:id', async (req, resp) => {
    try {
        let id = Number(req.params.id);

        let linhasAfetadas = await timeService.deletarTime(id);
    
        if (linhasAfetadas == 0) {
            resp.status(404).send({
                erro: 'Time não encontrado.'
            })
        } else {
            resp.status(204).send()
        }
    } catch (error) {
        resp.status(404).send({
            erro: error.message
        })
    }
   
})



export default endpoints;