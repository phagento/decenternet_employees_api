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

$data = json_decode(file_get_contents("php://input"));

// Set employe id to be deleted
$employee->id = $data->id;

// Delete employee
if ($employee->delete()) {
    echo '{';
    echo '"message": "Employee was successfully deleted."';
    echo '}';
} else {
    echo '{';
    echo '"message": "Unable to delete employee."';
    echo '}';
}