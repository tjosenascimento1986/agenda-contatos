<?php
require 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
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

    $sql = "UPDATE contatos SET 
    nome = ?, 
    sobrenome = ?, 
    telefone_fixo = ?, 
    telefone_celular = ?, 
    telefone_trabalho = ?, 
    email_pessoal = ?, 
    email_profissional = ?, 
    endereco_residencial = ?, 
    endereco_comercial = ?, 
    aniversario = ? 
    WHERE id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssssssi", $nome, $sobrenome, $telefone_fixo, $telefone_celular, $telefone_trabalho, $email_pessoal, $email_profissional, $endereco_residencial, $endereco_comercial, $aniversario, $id);

    if ($stmt->execute()) {
        echo "Contato editado com sucesso!";
    } else {
        echo "Erro ao editar contato: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
}
?>