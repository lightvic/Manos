<?php
class Collaborator {

	private $conn;
	private $project_table = 'collaborators';

	public function __construct($db) {
		$this->conn = $db;
	}

	public function get_collab_from_project($project_id) {

		$fields = "users.id as collab_id, first_name as collab_name, company, profile_picture";
		$query = "SELECT $fields FROM `collaborators` 
			LEFT JOIN `users` ON collaborators.collaborator_id = users.id
			WHERE project_id = :project_id";

		$stmt = $this->conn->prepare($query);

		$stmt->execute([
			':project_id' => $project_id
		]);

		return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
	}

	public function get_collab_from_user($user_id) {

		$fields = "users.id as collab_id, first_name as collab_name, company, profile_picture";
		$query = "SELECT DISTINCT $fields FROM `collaborators` 
			LEFT JOIN `users` ON collaborators.collaborator_id = users.id
			WHERE `user_id` = :userId";

		$stmt = $this->conn->prepare($query);

		$stmt->execute([
			':userId' => $user_id
		]);

		return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
	}
}