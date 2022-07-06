<?php

require '../vendor/autoload.php';

use Dotenv\Dotenv;

class Env {

  function __construct() {
    $this->load();
  }

  private function load() {
    $dotenv = Dotenv::createImmutable('../');
    $dotenv->load();
  }

  public function get($variable) {
    return $_ENV[$variable];
  }

}