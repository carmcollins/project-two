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
        addStudent: function (classId, userId) {
            return $.ajax({
                type: "POST",
                url: "/api/register/" + classId,
                data: userId
            });
        }
    };

    // When someone signs up for a class, get their user info
     function handleRegistration(userId) {
        var classId = $(".signup-btn").attr("data-id");
        userid = {
            userId: userId
        };
        API.addStudent(classId, userid);
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
    $("#class-signup-btn").on("click", function () {
        console.log("Sign up button clicked!");

        $.ajax({
            url: "/api/user_data",
            type: "GET"
        }).then(function (data) {
            if (!data){
                window.location.href = "/";
            }
            handleRegistration(data.id);
        });

    });

});