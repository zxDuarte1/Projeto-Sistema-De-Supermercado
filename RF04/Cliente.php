<?php

class Cliente {
    private string $cpf;
    private string $nome;
    private string $telefone;

    public function __construct(string $cpf, string $nome, string $telefone) {
        $this->setCpf($cpf);
        $this->setNome($nome);
        $this->setTelefone($telefone);
    }

    // Getters
    public function getCpf(): string {
        return $this->cpf;
    }

    public function getNome(): string {
        return $this->nome;
    }

    public function getTelefone(): string {
        return $this->telefone;
    }

    // Setters
    public function setCpf(string $cpf): void {
        $cpf = preg_replace('/[^0-9]/', '', $cpf); // remove pontos e traço
        if (strlen($cpf) !== 11) {
            throw new InvalidArgumentException("CPF inválido. Deve conter 11 dígitos.");
        }
        $this->cpf = $cpf;
    }

    public function setNome(string $nome): void {
        if (empty(trim($nome))) {
            throw new InvalidArgumentException("Nome não pode ser vazio.");
        }
        $this->nome = $nome;
    }

    public function setTelefone(string $telefone): void {
        $telefone = preg_replace('/[^0-9]/', '', $telefone); // remove formatação
        if (strlen($telefone) < 10 || strlen($telefone) > 11) {
            throw new InvalidArgumentException("Telefone inválido. Deve conter 10 ou 11 dígitos.");
        }
        $this->telefone = $telefone;
    }

    // Formata o CPF para exibição: 000.000.000-00
    public function getCpfFormatado(): string {
        return substr($this->cpf, 0, 3) . '.' .
               substr($this->cpf, 3, 3) . '.' .
               substr($this->cpf, 6, 3) . '-' .
               substr($this->cpf, 9, 2);
    }

    // Formata o telefone para exibição: (00) 90000-0000
    public function getTelefoneFormatado(): string {
        if (strlen($this->telefone) === 11) {
            return '(' . substr($this->telefone, 0, 2) . ') ' .
                         substr($this->telefone, 2, 5) . '-' .
                         substr($this->telefone, 7, 4);
        }
        return '(' . substr($this->telefone, 0, 2) . ') ' .
                     substr($this->telefone, 2, 4) . '-' .
                     substr($this->telefone, 6, 4);
    }

    public function exibir(): void {
        echo "CPF: {$this->getCpfFormatado()}\n";
        echo "Nome: {$this->nome}\n";
        echo "Telefone: {$this->getTelefoneFormatado()}\n";
        echo "----------------------------\n";
    }
}

// Exemplo de uso
$c1 = new Cliente("123.456.789-09", "Maria Oliveira", "(11) 98765-4321");
$c2 = new Cliente("98765432100", "João Santos", "1133334444");

$c1->exibir();
$c2->exibir();