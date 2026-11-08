<?php
header('Content-Type: application/json; charset=utf-8');

$pdo = new PDO(
    'mysql:host=127.0.0.1;dbname=db_gunung_jabar;charset=utf8mb4',
    'root',
    ''
);

$query = $pdo->query(
    'SELECT id, nama, mdpl, lokasi, kesulitan, foto
     FROM gunung
     ORDER BY id'
);

echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));