<?php
require 'conexao.php';

$sql = "SELECT * FROM contatos";
$result = $conn->query($sql);

$contatos = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $contatos[] = $row;
    }
}
$conn->close();
header('Content-Type: application/json');
echo json_encode($contatos);

?>