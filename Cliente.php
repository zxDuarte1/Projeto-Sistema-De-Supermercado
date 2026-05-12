
<?php
include_once '../config/conexao.php';

$name     = $_POST['name'];
$cpf      = $_POST['cpf'];
$email    = $_POST['user_email'];
$phone    = $_POST['user_phone'];
$address  = $_POST['user_address'];
$password = $_POST['password'];
$perfil   = $_POST['cargo'];


echo $perfil;

$sql = "INSERT INTO funcionario (nome, cpf, email, telefone, endereco, senha, perfil) 
        VALUES ('$name', '$cpf', '$email', '$phone', '$address', '$password', '$perfil')";

if ($conn->query($sql) === TRUE) {
    echo " deu certo";
} else {
    echo "deu errado";
}

$conn->close();
?>