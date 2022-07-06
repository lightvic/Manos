<?php
function upload_files($param) {
    // path to storage directory
    $target_dir = __DIR__ . "/../uploads/";
    $full_name = $_FILES[$param]["name"];
    $name_exploded = explode(".",$full_name);
    require_once __DIR__ . "/uuid.php";
    $file_name = guidv4($full_name);
    $extension = $name_exploded[1];
    // get extension in lower
    $full_name = $file_name . "." . $extension;
    $target_file = $target_dir . basename($full_name);
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    
    // if it's not a picture
    $check = getimagesize($_FILES["$param"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        return json_encode([
            "success" => false,
            "message" => "ce n'est pas une image"
        ]);	
    }
    
    // if picture is too big
    if ($_FILES["$param"]["size"] > 5000000) {
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
    if (move_uploaded_file($_FILES["$param"]["tmp_name"], $target_file)) {
        return $full_name;
    } else {
        return json_encode([
            "success" => false,
            "message" => "something went wrong"
        ]);	
    }
}