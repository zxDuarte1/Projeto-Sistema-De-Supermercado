<?php

class Cliente
{
    private $id;
    private $nome;
    private $cpf;

    private $email;
    private $telefone;
    private $endereco;
    private $senha;

    public function __construct($id, $nome, $cpf, $email, $telefone, $endereco, $senha)
    {
        $this->id = $id;
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->email = $email;
        $this->telefone = $telefone;
        $this->endereco = $endereco;
        $this->senha = $senha;
    }

    public function getId()
    {
        return $this->id;
    }
    public function getNome()
    {
        return $this->nome;
    }
    public function getCpf()
    {
        return $this->cpf;
    }
    public function getEmail()
    {
        return $this->email;
    }
    public function getTelefone()
    {
        return $this->telefone;
    }
    public function getEndereco()
    {
        return $this->endereco;
    }
    public function getSenha()
    {
        return $this->senha;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }
    public function setCpf($cpf)
    {
        $this->cpf = $cpf;
    }
    public function setEmail($email)
    {
        $this->email = $email;
    }
    public function setTelefone($telefone)
    {
        $this->telefone = $telefone;
    }
    public function setEndereco($endereco)
    {
        $this->endereco = $endereco;
    }
    public function setSenha($senha)
    {
        $this->senha = $senha;
    }
}
