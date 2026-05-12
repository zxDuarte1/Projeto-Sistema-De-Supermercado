create database sistemapdv;
use sistemapdv;

create table usuario (
id int auto_increment PRIMARY KEY,
nome varchar(100) not null,
cpf char(11) unique,
telefone char(15) unique,
endereco varchar(100) not null,
email varchar(50) unique,
senha varchar(20) not null,
perfil enum('ADMIN','GERENTE','CAIXA') not null,
status boolean not null default true
);

create table cliente (
id int auto_increment PRIMARY KEY,
nome varchar(100) not null,
cpf char(11) unique,
telefone char(15) unique,
endereco varchar(100) not null,
email varchar(50) unique,
senha varchar(20) not null
);

create table produto(
id int auto_increment primary key,
codigo_barra varchar(50) unique,
nome varchar(50) not null,
descricao varchar(100) not null,
categoria varchar(50) not null,
preco decimal(10,2) not null,
estoque int not null default 0,
estoque_minimo int not null default 0,
data_validade date
);

CREATE TABLE venda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    usuario_id INT NOT NULL,
    data_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10,2) NOT NULL,
    desconto DECIMAL(10,2) DEFAULT 0,
    valor_pago DECIMAL(10,2),
    status ENUM('FINALIZADA', 'CANCELADA') DEFAULT 'FINALIZADA',
    FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE item_venda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (venda_id) REFERENCES venda(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);
CREATE TABLE pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT NOT NULL,
    forma_pagamento ENUM('DINHEIRO', 'CARTAO', 'PIX') NOT NULL,
    valor_pago DECIMAL(10,2) NOT NULL,
    troco DECIMAL(10,2) DEFAULT 0,
    FOREIGN KEY (venda_id) REFERENCES venda(id)
);
CREATE TABLE movimentacao_estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    tipo ENUM('ENTRADA', 'SAIDA', 'AJUSTE') NOT NULL,
    quantidade INT NOT NULL,
    data_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    observacao VARCHAR(255),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);
CREATE TABLE nota_fiscal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT NOT NULL UNIQUE,
    numero_nota VARCHAR(50),
    data_emissao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (venda_id) REFERENCES venda(id)
);


