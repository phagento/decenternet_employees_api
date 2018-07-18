<?php
// required headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');

include_once '../config/db.php';
include_once '../objects/employee.php';

$database = new Db();
$db = $database->getConnection();

$employee = new Employee($db);

$stmt = $employee->read();
$employeesCount = $stmt->rowCount();

// Check if there are records found
$result = array('message' => 'No employees found!');
if ($employeesCount > 0) {
    $employees = array();
    $employees['records'] = array();

    // Retrieve employee table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $employee = array(
            'id' => $id,
            'name' => $name,
            'email' => $email,
            'mobile_number' => $mobile_number,
        );

        array_push($employees['records'], $employee);
    }

    $result = $employees;
}

echo json_encode($result);