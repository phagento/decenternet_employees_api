$(document).ready(function () {
    // Show the Create Employee form after clicking the 'Create Employee' button
    $(document).on('click', '.create-employee-button', function () {
        var create_employee_htm = "";
        create_employee_htm += "<div id='view-employees' class='btn btn-primary pull-right m-b-15px view-employees-button'>";
        create_employee_htm += "<span class='glyphicon glyphicon-list'></span> View Employees";
        create_employee_htm += "</div>";

        create_employee_htm += "<form id='form-create-employee' action='#' method='post' border='0'>";
        create_employee_htm += "<table class='table table-hover table-responsive table-bordered'>";

        create_employee_htm += "<tr>";
        create_employee_htm += "<td>Name</td>";
        create_employee_htm += "<td><input type='text' name='name' class='form-control' required /></td>";
        create_employee_htm += "</tr>";

        create_employee_htm += "<tr>";
        create_employee_htm += "<td>Email</td>";
        create_employee_htm += "<td><input type='text' name='email' class='form-control' required /></td>";
        create_employee_htm += "</tr>";

        create_employee_htm += "<tr>";
        create_employee_htm += "<td>Mobile Number</td>";
        create_employee_htm += "<td><input type='text' name='mobile_number' class='form-control' required /></td>";
        create_employee_htm += "</tr>";

        create_employee_htm += "<tr>";
        create_employee_htm += "<td></td>";
        create_employee_htm += "<td>";
        create_employee_htm += "<button type='submit' class='btn btn-primary'>";
        create_employee_htm += "<span class='glyphicon glyphicon-plus'></span> Create Employee";
        create_employee_htm += "</button>";
        create_employee_htm += "</td>";
        create_employee_htm += "</tr>";

        create_employee_htm += "</table>";
        create_employee_htm += "</form>";

        $('#content').html(create_employee_htm);

        // Update page title
        changePageTitle('Create Employee');
    });

    $(document).on('submit', '#form-create-employee', function () {
        var employeeFormData = JSON.stringify($(this).serializeObject());

        $.ajax({
            url: 'employee/create.php',
            type: 'POST',
            contentType: 'application/json',
            data: employeeFormData,
            success: function (result) {
                // Go back to Employees list
                showEmployees();
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });

        return false;
    });
});