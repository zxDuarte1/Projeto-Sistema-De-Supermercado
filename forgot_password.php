<?php
class Funcionario
{
    private $id;
    private $nome;
    private $cpf;
    private $telefone;
    private $email;
    private $senha;
    private $perfil;
    private $status;

    public function __construct($id, $nome, $cpf, $telefone, $email, $senha, $perfil, $status)
    {
        $this->id = $id;
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->telefone = $telefone;
        $this->email = $email;
        $this->senha = $senha;
        $this->perfil = $perfil;
        $this->status = $status;
    }

    public function getId()
    {
        return $this->id;
    }
    public function getNome()
    {
        return $this->nome;
    }
    public function getEmail()
    {
        return $this->email;
    }
    public function getSenha()
    {
        return $this->senha;
    }
    public function getPerfil()
    {
        return $this->perfil;
    }
    public function getStatus()
    {
        return $this->status;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }
    public function setEmail($email)
    {
        $this->email = $email;
    }
    public function setSenha($senha)
    {
        $this->senha = $senha;
    }
    public function setPerfil($perfil)
    {
        $this->perfil = $perfil;
    }
    public function setStatus($status)
    {
        $this->status = $status;
    }
}
