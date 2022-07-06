<?php
require_once '../config/Database.php';
require_once '../controllers/User.php';
require_Once '../controllers/Calendar.php';

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$database = new Database();
$db = $database->connect();

$calendar_dates = new Calendar($db);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    echo $calendar_dates->post();
  }

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $user_id = $_GET["userId"];
    echo $calendar_dates->get_all_from_user($user_id);
  }