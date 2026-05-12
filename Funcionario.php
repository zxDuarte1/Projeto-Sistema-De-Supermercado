<?php
include_once '../config/conexao.php';

$name     = $_POST['name'];
$cpf      = $_POST['cpf'];
$email    = $_POST['user_email'];
$phone    = $_POST['user_phone'];
$address  = $_POST['user_address'];
$password = $_POST['password'];

$sql  = "INSERT INTO cliente (nome, cpf, email, telefon, endereco, senha) 
VALUES ('$name', '$cpf', '$email' , '$phone', '$address', '$password')";


if ($conn->query($sql) === TRUE) {
    
    echo "<a href='../views/login.php'>Fazer nova encomenda</a><br>";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
