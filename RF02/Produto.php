<?php

class Produto {
    private static int $contador = 0;

    private int $codigo;
    private string $descricao;
    private float $valor_unitario;
    private DateTime $data_vencimento;

    public function __construct(string $descricao, float $valor_unitario, string $data_vencimento) {
        self::$contador++;
        $this->setCodigo(self::$contador);
        $this->setDescricao($descricao);
        $this->setValorUnitario($valor_unitario);
        $this->setDataVencimento($data_vencimento);
    }

    // Getters
    public function getCodigo(): int {
        return $this->codigo;
    }

    public function getDescricao(): string {
        return $this->descricao;
    }

    public function getValorUnitario(): float {
        return $this->valor_unitario;
    }

    public function getDataVencimento(): string {
        return $this->data_vencimento;
    }
    
    public static function getTotalProdutos(): int {
        return self::$contador;
    }

    // Setters
    public function setCodigo(int $codigo): void {
      if($codigo > 0){
        $this->codigo = $codigo;
      } else {
        throw new InvalidArgumentException("Codigo não pode ser negativo.");
      }
    }

    public function setDescricao(string $descricao): void {
        $this->descricao = $descricao;
    }

    public function setValorUnitario(float $valor_unitario): void {
        if ($valor_unitario < 0) {
            throw new InvalidArgumentException("Valor unitário não pode ser negativo.");
        }
        $this->valor_unitario = $valor_unitario;
    }
    public function setDataVencimento(string $data_vencimento): void {
        $data = DateTime::createFromFormat('Y-m-d', $data_vencimento);
        if (!$data) {
            throw new InvalidArgumentException("Data inválida. Use o formato AAAA-MM-DD.");
        }
        $this->data_vencimento = $data;
    }

    // Verifica se o produto está vencido
    public function estaVencido(): bool {
        return $this->data_vencimento < new DateTime();
    }

    // Exibe os dados do produto
    public function exibir(): void {
        echo "Código: {$this->codigo}\n";
        echo "Descrição: {$this->descricao}\n";
        echo "Valor Unitário: R$ " . number_format($this->valor_unitario, 2, ',', '.') . "\n";
        echo "Data de Vencimento: " . $this->data_vencimento->format('d/m/Y') . "\n";
        echo "Situação: " . ($this->estaVencido() ? "Vencido" : "Válido") . "\n";
    }
    
}

