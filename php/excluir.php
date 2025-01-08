<?php
require 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    $sql = "DELETE FROM contatos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "Contato excluído com sucesso!";
    } else {
        echo "Erro ao excluir contato: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
}
?>