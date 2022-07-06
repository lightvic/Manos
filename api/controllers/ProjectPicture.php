<?php

class ProjectPicture {

  private $conn;
  private $project_picture_table = 'project_pictures';

  public function __construct($db) {
    $this->conn = $db;
  }

  public function post($uuid) {
		$user_id = $_POST['user_id'];
		// path to storage directory
		$target_dir = __DIR__ . "/../uploads/";
		$full_name = $_FILES["projectPictures"]["name"];
		$name_exploded = explode(".",$full_name);
		require_once __DIR__ . "/../src/uuid.php";
		$file_name = guidv4($full_name);
		$extension = $name_exploded[1];
		// get extension in lower
		$full_name = $file_name . "." . $extension;
		$target_file = $target_dir . basename($full_name);
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		
		// if it's not a picture
		$check = getimagesize($_FILES["projectPictures"]["tmp_name"]);
		if($check !== false) {
			$uploadOk = 1;
		} else {
			return json_encode([
				"success" => false,
				"message" => "ce n'est pas une image"
			]);	
		}

		// if picture is too big
		if ($_FILES["projectPictures"]["size"] > 500000) {
			return json_encode([
				"success" => false,
				"message" => "Image trop volumineuse"
			]);	
		}

		// if picture as the good extension
		if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
			return json_encode([
				"success" => false,
				"message" => "seulement jpg, png, jpeg et gif"
			]);	
		}

		// if everything is good
		if (move_uploaded_file($_FILES["projectPictures"]["tmp_name"], $target_file)) {
			$query = "INSERT INTO $this->project_picture_table (`name`, `uuid`, `user_id`) VALUES (:name, :uuid, :userId)";
			$stmt = $this->conn->prepare($query);

			$stmt->execute([
				":name" => $full_name,
				":uuid" => $uuid,
				"userId" => $user_id
			]);
			return json_encode([
				"success" => true,
				"message" => "image enregistrée"
			]);	
		} else {
			return json_encode([
				"success" => false,
				"message" => "something went wrong"
			]);	
		}
	}	
}
