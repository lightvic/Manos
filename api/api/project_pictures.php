<?php
require_once '../config/Database.php';
require_once '../controllers/ProjectPicture.php';

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$database = new Database();
$db = $database->connect();

$project_picture = new ProjectPicture($db);

if(isset($_FILES['projectPictures'])){
	$uuid = $_GET['uuid'];
  echo $project_picture->post($uuid);
}

if($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  $project_id = $_GET['projectId'];
  echo $project_picture->delete($picture_id);
}