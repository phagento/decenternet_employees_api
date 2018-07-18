$(document).ready(function () {
    // Show all employees on page load
    showEmployees();

    // Show all employees when clicking the button
    $(document).on('click', '.view-employees-button', function () {
        showEmployees();
    });
});

/**
 * Show all employees in HTML table format
 */
function showEmployees() {
    // Get employees from the API
    $.getJSON('employee/read.php', function (data) {
        var employees_htm = '';
        employees_htm += "<div id='create-employee' class='btn btn-primary pull-right m-b-15px create-employee-button'>";
        employees_htm += "<span class='glyphicon glyphicon-plus'></span> Create Emloyee";
        employees_htm += "</div>";

        // Employees HTML table
        employees_htm += "<table class='table table-bordered table-hover'>";
        employees_htm += "<tr>";
        employees_htm += "<th class='w-25-pct'>Name</th>";
        employees_htm += "<th class='w-10-pct'>Email</th>";
        employees_htm += "<th class='w-15-pct'>Mobile Number</th>";
        employees_htm += "<th class='w-25-pct text-align-center'>Action</th>";
        employees_htm += "</tr>";

        if (data.records) {
            $.each(data.records, function (key, val) {
                employees_htm += "<tr>";
                employees_htm += "<td>" + val.name + "</td>";
                employees_htm += "<td>" + val.email + "</td>";
                employees_htm += "<td>" + val.mobile_number + "</td>";
                employees_htm += "<td>";

                // View button
                employees_htm += "<button class='btn btn-primary m-r-10px view-one-employee-button' data-id='" + val.id + "'>";
                employees_htm += "<span class='glyphicon glyphicon-eye-open'></span> View";
                employees_htm += "</button>";

                // Edit button
                employees_htm += "<button class='btn btn-info m-r-10px update-employee-button' data-id='" + val.id + "'>";
                employees_htm += "<span class='glyphicon glyphicon-edit'></span> Edit";
                employees_htm += "</button>";

                // Delete button
                employees_htm += "<button class='btn btn-danger delete-employee-button' data-id='" + val.id + "'>";
                employees_htm += "<span class='glyphicon glyphicon-remove'></span> Delete";
                employees_htm += "</button>";
                employees_htm += "</td>";
                employees_htm += "</tr>";
            });
        } else {
            employees_htm += "<tr>";
            employees_htm += "<td colspan='4'>";
            employees_htm += data.message;
            employees_htm += "</td>";
            employees_htm += "</tr>";
        }


        $('#content').html(employees_htm);

        // Update page title
        changePageTitle('View Employees');

        employees_htm += "</table>";
    });
}