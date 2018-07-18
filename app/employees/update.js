$(document).ready(function () {
    $(document).on('click', '.update-employee-button', function () {
        var employeeId = $(this).attr('data-id');

        $.getJSON('employee/view.php?id=' + employeeId, function (data) {
            var name = data.name;
            var email = data.email;
            var mobile_number = data.mobile_number;

            // Update Form
            var update_employee_htm = "";
            update_employee_htm += "<div id='view-employees' class='btn btn-primary pull-right m-b-15px view-employees-button'>";
            update_employee_htm += "<span class='glyphicon glyphicon-list'></span> View Employees";
            update_employee_htm += "</div>";
            update_employee_htm += "<form id='form-update-employee' action='#' method='post' border='0'>";
            update_employee_htm += "<table class='table table-hover table-responsive table-bordered'>";

            update_employee_htm += "<tr>";
            update_employee_htm += "<td>Name</td>";
            update_employee_htm += "<td><input value=\"" + name + "\" type='text' name='name' class='form-control' required /></td>";
            update_employee_htm += "</tr>";

            update_employee_htm += "<tr>";
            update_employee_htm += "<td>Email</td>";
            update_employee_htm += "<td><input value=\"" + email + "\" type='text' name='email' class='form-control' required /></td>";
            update_employee_htm += "</tr>";

            update_employee_htm += "<tr>";
            update_employee_htm += "<td>Mobile Number</td>";
            update_employee_htm += "<td><input value=\"" + mobile_number + "\" type='text' name='mobile_number' class='form-control' required /></td>";
            update_employee_htm += "</tr>";

            update_employee_htm += "<tr>";
            update_employee_htm += "<td><input value=\"" + employeeId + "\" name='id' type='hidden' /></td>";
            update_employee_htm += "<td>";
            update_employee_htm += "<button type='submit' class='btn btn-info'>";
            update_employee_htm += "<span class='glyphicon glyphicon-edit'></span> Update Employee";
            update_employee_htm += "</button>";
            update_employee_htm += "</td>";

            update_employee_htm += "</tr>";

            update_employee_htm += "</table>";
            update_employee_htm += "</form>";

            $('#content').html(update_employee_htm);

            changePageTitle('Update Employee');
        });
    });

    $(document).on('submit', '#form-update-employee', function () {
        var employeeData = JSON.stringify($(this).serializeObject());

        $.ajax({
            url: 'employee/update.php',
            type: 'POST',
            contentType: 'application/json',
            data: employeeData,
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