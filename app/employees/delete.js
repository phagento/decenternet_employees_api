$(document).ready(function () {
    $(document).on('click', '.delete-employee-button', function () {
        var employeeId = $(this).attr('data-id');

        // Bootbox popup that confirms deletion
        bootbox.confirm({
            message: "<h4>Are you sure?</h4>",
            buttons: {
                confirm: {
                    label: '<span class="glyphicon glyphicon-ok"></span> Yes',
                    className: 'btn-danger'
                },
                cancel: {
                    label: '<span class="glyphicon glyphicon-remove"></span> No',
                    className: 'btn-primary'
                }
            },
            callback: function (result) {
                if (result == true) {
                    $.ajax({
                        url: 'employee/delete.php',
                        type: 'POST',
                        dataType: 'json',
                        data: JSON.stringify({id: employeeId}),
                        success: function (result) {
                            // Go back to Employees list
                            showEmployees();
                        },
                        error: function (xhr, resp, text) {
                            console.log(xhr, resp, text);
                        }
                    });

                }
            }
        });
    });
});