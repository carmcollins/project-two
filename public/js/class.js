$(document).ready(function () {

    var API = {
        createClass: function (newClass) {
            return $.ajax({
                type: "POST",
                url: "api/class",
                data: newClass
            });
        },
        getClasses: function () {
            return $.ajax({
                url: "api/classes",
                type: "GET"
            });
        },
        addStudent: function (classId) {
            return $.ajax({
                type: "POST",
                url: "api/register/" + classId
            });
        }
    };

    // When someone signs up for a class, get their user info
    var handleRegistration = function (event) {
        event.preventDefault();
        var classId = $(".stripe-button").attr("data-id");
        API.addStudent(classId);
    };

    // When someone creates a class, get all of the info from the form
    var handleNewClassSubmit = function (event) {
        event.preventDefault();

        if (!
            $("#title-input").val() &&
            $("#description-input").val() &&
            $("#instructor-input").val() &&
            $("#date-input").val() &&
            $("#starttime-input").val() &&
            $("#endtime-input").val() &&
            $("#location-input").val() &&
            $("#price-input").val() &&
            $("#photo-input").val() &&
            $("#category-input").val()) {

                $(".error-message").text("Please fill out all fields!");

        } else {

            var newClass = {
                title: $("#title-input").val().trim(),
                instructor: $("#instructor-input").val().trim(),
                description: $("#description-input").val().trim(),
                date: $("#date-input").val().trim(),
                starttime: $("#starttime-input").val().trim(),
                endtime: $("#endtime-input").val().trim(),
                location: $("#location-input").val().trim(),
                price: $("#price-input").val().trim(),
                photo: $("#photo-input").val().trim(),
                category: $("#category-input").val()
            };

            API.createClass(newClass);

            $("#title-input").val("");
            $("#description-input").val("");
            $("#instructor-input").val("");
            $("#date-input").val("");
            $("#starttime-input").val("");
            $("#endtime-input").val("");
            $("#location-input").val("");
            $("#price-input").val("");
            $("#photo-input").val("");
            $("#category-input").val("Choose");
            $("select").formSelect();
            $(".error-message").text("");
        
        }
    };

    // When someone clicks the Create Class button...
    $("#createclass-btn").on("click", handleNewClassSubmit);

    // When someone clicks on the Stripe button...
    $(".stripe-button").on("click", function () {
        if (!req.user) {
            return $.ajax({
                url: "/classes",
                type: "GET"
            });
        }
        else {
            handleRegistration;
        }
    });

});