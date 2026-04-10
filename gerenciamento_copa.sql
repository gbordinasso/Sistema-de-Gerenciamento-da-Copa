create database copa_futebol;
use copa_futebol;

CREATE TABLE time (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    sigla CHAR(3),
    qtd_copas INT,
    ranking_fifa DECIMAL(5,2),
    ativo BOOLEAN,
    data_fundacao DATE
);


CREATE TABLE jogo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_time_mandante INT,
    id_time_visitante INT,
    nr_gols_mandante INT,
    nr_gols_visitante INT,
    publico_pagante INT,
    renda_total DECIMAL(10,2),
    realizado BOOLEAN,
    data_jogo DATETIME,

    FOREIGN KEY (id_time_mandante) REFERENCES time(id),
    FOREIGN KEY (id_time_visitante) REFERENCES time(id)
);