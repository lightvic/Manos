<?php

class Calendar {
    private $conn;
    private $calendar_dates_table = 'calendar_dates';
  
    public function __construct($db) {
      $this->conn = $db;
    }
    
     public function post(){
        $body = $_POST;
        $values = array_values($body);
        $query = "INSERT INTO $this->calendar_dates_table (`started_at`, `ended_at`, `user_id`) VALUES (?, ?, ?)";

        $stmt = $this->conn->prepare($query);
    
        $stmt->execute($values);
    
        return json_encode(["success" => true]);
    }

    public function get_all_from_user($user_id) {
        $query = "SELECT * FROM $this->calendar_dates_table WHERE `user_id` = :userid ";

        $stmt = $this->conn->prepare($query);
    
        $stmt->execute([
            ":userid" => $user_id
        ]);
    
        return json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
}