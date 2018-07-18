<?php

class Db
{
    private $_host = 'localhost';
    private $_db_name = 'decenternet';
    private $_db_username = 'root';
    private $_db_password = 'Kio8LBc79GBY';
    public $conn;

    /**
     * Get the database connection
     *
     * @return null|PDO
     */
    public function getConnection()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->_host . ";dbname=" . $this->_db_name, $this->_db_username, $this->_db_password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}