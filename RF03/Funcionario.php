<?php

class Funcionario {
    private static int $contador = 0;

    private string $matricula;
    private string $nome;
    private string $endereco;

    public function __construct(string $nome, string $endereco) {
        self::$contador++;
        $this->setMatricula();
        $this->setNome($nome);
        $this->setEndereco($endereco);
    }

    // Getters
    public function getMatricula(): string {
        return $this->matricula;
    }

    public function getNome(): string {
        return $this->nome;
    }

    public function getEndereco(): string {
        return $this->endereco;
    }

    public static function getTotalFuncionarios(): int {
        return self::$contador;
    }

    // Setters
    private function setMatricula(): void {
        $ano = date('Y');
        $numero = str_pad(self::$contador, 3, '0', STR_PAD_LEFT);
        $this->matricula = $ano . '00' . $numero;
    }

    public function setNome(string $nome): void {
        if (empty(trim($nome))) {
            throw new InvalidArgumentException("Nome não pode ser vazio.");
        }
        $this->nome = $nome;
    }

    public function setEndereco(string $endereco): void {
        if (empty(trim($endereco))) {
            throw new InvalidArgumentException("Endereço não pode ser vazio.");
        }
        $this->endereco = $endereco;
    }

    public function exibir(): void {
        echo "Matrícula: {$this->matricula}\n";
        echo "Nome: {$this->nome}\n";
        echo "Endereço: {$this->endereco}\n";
        echo "----------------------------\n";
    }
}

// Exemplo de uso
$f1 = new Funcionario("Carlos Silva", "Rua das Flores, 123");
$f2 = new Funcionario("Ana Souza", "Av. Brasil, 456");
$f3 = new Funcionario("Pedro Lima", "Rua do Sol, 789");

$f1->exibir();
$f2->exibir();
$f3->exibir();

echo "Total de funcionários: " . Funcionario::getTotalFuncionarios() . "\n";