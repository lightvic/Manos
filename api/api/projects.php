<?php
require_once '../config/Database.php';
require_once '../controllers/Project.php';
require_once '../controllers/ProjectPicture.php';
require_once '../src/uuid.php';


header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$database = new Database();
$db = $database->connect();

$project = new Project($db);
$project_picture = new ProjectPicture($db);

// get single project, or get all project of user
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	if (isset($_GET['projectId'])) {
		$project_id = $_GET['projectId'];
		echo $project->get_single($project_id);
	} else if (isset($_GET['userId'])) {
		$user_id = $_GET['userId'];
		echo $project->get_all_from_user($user_id);
	}
}

// post new project with or without file
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$uuid = guidv4("new uuid");
  echo $project->post($uuid);
  if(isset($_FILES['projectPictures'])){
	echo $project_picture->post($uuid);
  }
}

// upadate project
if($_SERVER['REQUEST_METHOD'] == 'PATCH') {
	$project_id = $_GET['projectId'];
  echo $project->patch($project_id);
}

//delete project
if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
	$project_id = $_GET['projectId'];
  echo $project->delete($project_id);
}