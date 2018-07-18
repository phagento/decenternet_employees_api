<?php

class Employee
{
    private $conn;
    private $_tbl_name = 'employees';

    public $id;
    public $name;
    public $email;
    public $mobile_number;
    public $created;
    public $modified;

    /**
     * Employee constructor
     *
     * @param $db
     */
    public function __construct($db)
    {
        $this->conn = $db;
    }

    /**
     * Get all employees
     *
     * @return mixed
     */
    function read()
    {
        $query = 'SELECT * FROM ' . $this->_tbl_name . ' ORDER BY created DESC';
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    /**
     * Create employee record
     *
     * @return bool
     */
    function create()
    {
        $query = 'INSERT INTO ' . $this->_tbl_name . ' SET name=:name, email=:email, mobile_number=:mobile_number, created=:created';
        $stmt = $this->conn->prepare($query);

        // Some sanitization
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->mobile_number = htmlspecialchars(strip_tags($this->mobile_number));
        $this->created = htmlspecialchars(strip_tags($this->created));

        // Bind
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":mobile_number", $this->mobile_number);
        $stmt->bindParam(":created", $this->created);

        return ($stmt->execute());
    }

    /**
     * Update employee record
     *
     * @return bool
     */
    function update()
    {
        $query = 'UPDATE ' . $this->_tbl_name . '
            SET
                name = :name,
                email = :email,
                mobile_number = :mobile_number
            WHERE
                id = :id';
        $stmt = $this->conn->prepare($query);

        // Some sanitization
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->mobile_number = htmlspecialchars(strip_tags($this->mobile_number));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Bind
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':mobile_number', $this->mobile_number);
        $stmt->bindParam(':id', $this->id);

        return ($stmt->execute());
    }

    /**
     * Delete employee record
     *
     * @return bool
     */
    function delete()
    {
        $query = 'DELETE FROM ' . $this->_tbl_name . ' WHERE id = ?';
        $stmt = $this->conn->prepare($query);

        // Some sanitization
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Bind id of record to delete
        $stmt->bindParam(1, $this->id);

        return ($stmt->execute());
    }

    /**
     * Read single employee record
     */
    function view()
    {
        $query = 'SELECT * FROM ' . $this->_tbl_name . ' WHERE id = ?';
        $stmt = $this->conn->prepare($query);

        // Bind
        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        // Get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // Set values to object properties
        $this->name = $row['name'];
        $this->email = $row['email'];
        $this->mobile_number = $row['mobile_number'];
    }
}