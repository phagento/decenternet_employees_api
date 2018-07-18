<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/db.php';
include_once '../objects/employee.php';

$database = new Db();
$db = $database->getConnection();

$employee = new Employee($db);

// Get posted data
$data = json_decode(file_get_contents("php://input"));

// Set employee property values
$employee->name = $data->name;
$employee->email = $data->email;
$employee->mobile_number = $data->mobile_number;
$employee->created = date('Y-m-d H:i:s');

// Create employee
if ($employee->create()) {
    echo '{';
    echo '"message": "Employee was created."';
    echo '}';
} else {
    echo '{';
    echo '"message": "Unable to create employee."';
    echo '}';
}
?>