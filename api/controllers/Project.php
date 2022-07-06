<?php

class Project {

  private $conn;
  private $project_table = 'projects';

  public function __construct($db) {
    $this->conn = $db;
  }

  public function get_all_from_user($user_id) {

    $fields = "projects.id as project_id, title, description, budget, projects.user_id, localisation, timespan, projects.uuid as uuid, pictures_name";
    
    $query = "SELECT $fields FROM projects
      LEFT JOIN(
        SELECT projects.uuid, project_pictures.user_id, GROUP_CONCAT(DISTINCT project_pictures.name SEPARATOR ',') AS pictures_name
        FROM projects
        JOIN project_pictures ON projects.uuid = project_pictures.uuid
        GROUP BY project_pictures.user_id, projects.uuid
      ) tmp
      ON projects.uuid = tmp.uuid
      WHERE projects.user_id = :userId";

    $stmt = $this->conn->prepare($query);

    $stmt->execute([
			':userId' => $user_id
    ]);

    $projects = $stmt->fetchAll(PDO::FETCH_ASSOC);

    for ($i = 0; $i < count($projects); $i++){
      if ($projects[$i]["pictures_name"] != NULL) {
        $projects[$i]["pictures_name"] = explode(",", $projects[$i]["pictures_name"]);
      }
    }

    return json_encode($projects);
  }

  public function get_single($project_id) {

    $fields = "projects.id as project_id, title, description, budget, projects.user_id, localisation, timespan,  pictures_name, projects.uuid";

    $query = "SELECT $fields FROM projects
      LEFT JOIN(
        SELECT projects.uuid, project_pictures.user_id, GROUP_CONCAT(DISTINCT project_pictures.name SEPARATOR ',') AS pictures_name
        FROM projects
        JOIN project_pictures ON projects.uuid = project_pictures.uuid
        GROUP BY project_pictures.user_id, projects.uuid
      ) tmp
      ON projects.uuid = tmp.uuid
      WHERE projects.id = :project_id";

    $stmt = $this->conn->prepare($query);

    $stmt->execute([
      ':project_id' => $project_id
    ]);

    $project = $stmt->fetch(PDO::FETCH_ASSOC);

    
      if ($project["pictures_name"] != NULL) {
        $project["pictures_name"] = explode(",", $project["pictures_name"]);
    }

    return json_encode($project);

  }

  public function post($uuid) {
    // $body = json_decode(file_get_contents('php://input'), true);
    $body = $_POST;
    $keys = array_keys($body);
    $values = array_values($body);

    foreach($keys as $key) {
			if(!in_array($key, ['title', 'description', 'user_id', 'budget', 'timespan', 'uuid'])) {
				return json_encode([
						"success" => false,
						"error" => "champ invalide"
				]);
			}
    }

    $query = "INSERT INTO $this->project_table (" . implode(',', $keys) . ",`uuid`) VALUES (";
    $query .= str_repeat('?,', count($values));
    $query .= '?)';
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute([
      ...$values,
      $uuid
    ]);
    
    return json_encode(["success" => true]);

  }

	
  public function patch($project_id) {
		$body = json_decode(file_get_contents('php://input'), true);
    $keys = array_keys($body);
    $values = array_values($body);

		foreach($keys as $key) {
			if(!in_array($key, ['title', 'description', 'budget', 'timespan'])) {
				return json_encode([
						"success" => false,
						"error" => "champ invalide"
				]);
			}
    }

    $query = "UPDATE $this->project_table SET ";
		foreach($body as $key => $value) {
			$query .= "`" . $key . "` = ?,";
		}
		$query = rtrim($query, ',');
		$query .= "WHERE `id` = ?";
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute([
			...$values,
			$project_id
		]);
    
    return json_encode([
			"success" => true,
			"message" => "Modifié avec succé"
		]);		
  }

  public function delete($project_id) {
    $query = "DELETE FROM $this->project_table WHERE `id` = :project_id";

    $stmt = $this->conn->prepare($query);
    $stmt->execute([
      ":project_id" => $project_id
    ]);

    return json_encode([
			"success" => true,
			"message" => "suprimé avec succé"
		]);	

  }
	
}
