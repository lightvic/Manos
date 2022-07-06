<?php
require_once '../config/Database.php';
require_once '../controllers/Collaborator.php';

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$database = new Database();
$db = $database->connect();

$collaborator = new Collaborator($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	if (isset($_GET['projectId'])) {
		$project_id = $_GET['projectId'];
		echo $collaborator->get_collab_from_project($project_id);
	} else if (isset($_GET['userId'])) {
		$user_id = $_GET['userId'];
		echo $collaborator->get_collab_from_user($user_id);
	}
}