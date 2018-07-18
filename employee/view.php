<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once '../config/db.php';
include_once '../objects/employee.php';

$database = new Db();
$db = $database->getConnection();
$employee = new Employee($db);

// Set ID to be updated
$employee->id = isset($_GET['id']) ? $_GET['id'] : die('Cannot read employee');

// Read the details of employee to be updated
$employee->view();

$employeeArr = array(
    "id" =>  $employee->id,
    "name" => $employee->name,
    "email" => $employee->email,
    "mobile_number" => $employee->mobile_number,
);

// JSON formatted
print_r(json_encode($employeeArr));