<?php
require 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $telefone_fixo = $_POST['telefone_fixo'];
    $telefone_celular = $_POST['telefone_celular'];
    $telefone_trabalho = $_POST['telefone_trabalho'];
    $email_pessoal = $_POST['email_pessoal'];
    $email_profissional = $_POST['email_profissional'];
    $endereco_residencial = $_POST['endereco_residencial'];
    $endereco_comercial = $_POST['endereco_comercial'];
    $aniversario = $_POST['aniversario'];

    $sql = "INSERT INTO contatos (nome, sobrenome, telefone_fixo, telefone_celular, telefone_trabalho, email_pessoal, email_profissional, endereco_residencial, endereco_comercial, aniversario)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssssss", $nome, $sobrenome, $telefone_fixo, $telefone_celular, $telefone_trabalho, $email_pessoal, $email_profissional, $endereco_residencial, $endereco_comercial, $aniversario);


    if ($stmt->execute()) {
        echo "Contato adicionado com sucesso!";
    } else {
        echo "Erro ao adicionar contato: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
}
?>