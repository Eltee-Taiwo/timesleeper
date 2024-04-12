$("#SubscribeForm").on('submit', function (e) {
    e.preventDefault();
    Loading(true);
    if (ValidateForm()) {
        $.ajax({
            url: "api/Subscribe",
            type: "POST",
            data: JSON.stringify({ "EmailAddress": $("#Email").val() }),
            contentType: "application/json; charset=utf-8"
        })
            .done(function (data) {
                Loading(false);
                $("#Email").val("")
                toastr.success("<h2>Thank you for subscribing to our film updates!</h2>");
            })
            .fail(function (xHr) {
                Loading(false);
                toastr.error("<h2>Oh no! Something went wrong.</h2>");
            });
    }
    else {
        Loading(false);
        $("#Email").addClass("error");
        $("#ErrorMessage").removeClass("hidden");
    }
});

function ValidateForm() {
    let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let match = $("#Email").val().match(regex);
    if (null === match) {
        return false;
    }
    return true;
}

function Loading(val) {
    if (val === true) {
        $("#EmailDiv").addClass("hidden");
        $("#EmailLoadingDiv").removeClass("hidden");
    }
    else {
        $("#EmailDiv").removeClass("hidden");
        $("#EmailLoadingDiv").addClass("hidden");
    }
}