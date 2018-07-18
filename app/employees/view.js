$(document).ready(function () {
    $(document).on('click', '.view-one-employee-button', function () {
        var employeeId = $(this).attr('data-id');

        $.getJSON('employee/view.php?id=' + employeeId, function (data) {
            var view_employee_htm = "";
            view_employee_htm += "<div id='view-employees' class='btn btn-primary pull-right m-b-15px view-employees-button'>";
            view_employee_htm += "<span class='glyphicon glyphicon-list'></span> View Employees";
            view_employee_htm += "</div>";

            view_employee_htm += "<table class='table table-bordered table-hover'>";
            view_employee_htm += "<tr>";
            view_employee_htm += "<td class='w-30-pct'>Name</td>";
            view_employee_htm += "<td class='w-70-pct'>" + data.name + "</td>";
            view_employee_htm += "</tr>";

            view_employee_htm += "<tr>";
            view_employee_htm += "<td>Email</td>";
            view_employee_htm += "<td>" + data.email + "</td>";
            view_employee_htm += "</tr>";

            view_employee_htm += "<tr>";
            view_employee_htm += "<td>Mobile Number</td>";
            view_employee_htm += "<td>" + data.mobile_number + "</td>";
            view_employee_htm += "</tr>";

            view_employee_htm += "</table>";

            $('#content').html(view_employee_htm);

            changePageTitle('View Employee');
        });
    });

});