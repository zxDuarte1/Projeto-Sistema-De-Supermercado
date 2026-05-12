<?php
class Produto
{
    private $id;
    private $codigo_barras;
    private $nome;
    private $descricao;
    private $categoria;

    private $preco;
    private $estoque;
    private $estoque_minimo;
    private $data_validade;

    public function __construct($id, $codigo_barras, $nome, $descricao, $categoria, $preco, $estoque, $estoque_minimo, $data_validade)
    {
        $this->id = $id;
        $this->codigo_barras = $codigo_barras;
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->categoria = $categoria;
        $this->preco = $preco;
        $this->estoque = $estoque;
        $this->estoque_minimo = $estoque_minimo;
        $this->data_validade = $data_validade;
    }
}
