<?php

require_once __DIR__ . '/Env.php';

class Database {

  function __construct() {
    $this->env = new Env();
    $this->host = $this->env->get('HOST');
    $this->dbname = $this->env->get('DBNAME');
    $this->username = $this->env->get('USERNAME');
    $this->password = $this->env->get('PASSWORD');
    $this->port = $this->env->get('PORT');
  }

  public function connect() {
    $this->conn = null;
    
    try {
      $this->conn = new PDO("mysql:host=$this->host;dbname=$this->dbname;port=$this->port", $this->username, $this->password);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch (PDOException $e) {
      echo "Connection Error: $e";
    }

    return $this->conn;
  }
}