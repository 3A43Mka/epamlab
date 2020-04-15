$(document).ready(function() {
    let spinner = $(".spinner");
    let invalid = false;
    $("#form").on("submit", (e) => {
        e.preventDefault();
        invalid = false;
        let dataToSend = {};
        const inputs = $("[data-name]");
        inputs.each((key, item) => {
            if (!$(item).val()) {
                if (!$(item).parent().find("p").length) {
                    let error = $("<p></p>").addClass("error").text("Wrong input");
                    $(item).parent().append(error);
                }
                invalid = true;
            } else {
                if ($(item).parent().find("span").text() == "email" && !(validateEmail($(item).val()))) {
                    if (!$(item).parent().find("p").length) {
                        let error = $("<p></p>").addClass("error").text("Wrong input");
                        $(item).parent().append(error);
                    }
                    invalid = true;
                } else {
                    if ($(item).parent().find("p").length)
                        $(item).parent().find(".error").remove();
                }
            }
            dataToSend[$(item).data("name")] = $(item).val();
        });
        if (!invalid)
            $.ajax({
                url: "https://anyurl.con",
                type: "POST",
                beforeSend: () => {
                    spinner.show();
                },
                complete: () => {
                    spinner.hide();
                },
                contentType: "application/json",
                data: JSON.stringify(dataToSend),
                success: () => {
                    alert(1);
                },
                error: () => {
                    alert(0);
                }
            });
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}