<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$dbHost = 'localhost';
$dbName = 'gunung_jabar';
$dbUser = 'root';
$dbPass = '';

try {
    $pdo = new PDO(
        "mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4",
        $dbUser,
        $dbPass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );

    $stmt = $pdo->query(
        'SELECT id, nama, mdpl, lokasi, kesulitan, foto, latitude, longitude, koordinat_sumber
         FROM gunung
         ORDER BY id'
    );

    echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
} catch (PDOException $e) {
    error_log('API gunung: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Gagal mengambil data gunung dari database.']);
}