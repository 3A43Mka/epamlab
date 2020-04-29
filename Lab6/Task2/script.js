$(document).ready(function() {
    let spinner = $(".spinner");
    let employees = {};

    $.ajax({
        url: "http://dummy.restapiexample.com/api/v1/employees",
        type: "GET",
        beforeSend: () => {
            spinner.show();
        },
        complete: () => {
            spinner.hide();
        },
        success: function(data, status, xhr) {

            employees = data.data;
            console.log(employees);
            $.each(employees, function(index, item) {
                $(".gradient-list").append($("<li></li>").text(item.employee_name + " -- $" + item.employee_salary));
            });

        },
        error: () => {
            alert("error.text");
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}