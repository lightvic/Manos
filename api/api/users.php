<?php
require_once '../config/Database.php';
require_once '../controllers/User.php';
require_once '../src/upload_function.php';

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$database = new Database();
$db = $database->connect();

$user = new User($db);

if ($_SERVER["REQUEST_METHOD"] === "GET"){
  if (isset($_GET['userId'])) {
    $user_id = $_GET['userId'];
    echo $user->get_single($user_id);
  } else if (isset($_GET['job'])) {
    $job = $_GET['job'];
    echo $user->filter_by_jobs($job);
  } else {
    echo $user->get_all();
  }
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $profile_picture = NULL;
  $banner = NULL;
  if (isset($_FILES['profile_picture'])){
    $param = 'profile_picture';
    $profile_picture = upload_files($param);
  }
  if (isset($_FILES['banner'])) {
    $param = 'banner';
    $banner = upload_files($param);
  }
  echo $user->post($profile_picture, $banner);
}

if($_SERVER['REQUEST_METHOD'] == 'PATCH') {
	$user_id = $_GET['userId'];
  echo $user->patch($user_id);
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
	$project_id = $_GET['projectId'];
  echo $project->delete($project_id);
}