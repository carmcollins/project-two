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
        getClass: function () {
            var id = $(this).data("id");
            return $.ajax({
                url: "api/class/" + id,
                type: "GET"
            });
        }   
    };

    // handleNewClassSubmit is called whenever someone creates a class
    var handleNewClassSubmit = function (event) {
        event.preventDefault();

        var newClass = {
            title: $("#title-input").val().trim(),
            description: $("#description-input").val().trim(),
            instructor: $("#instructor-input").val().trim(),
            date: $("#date-input").val().trim(),
            starttime: $("#starttime-input").val().trim(),
            endtime: $("#endtime-input").val().trim(),
            location: $("#location-input").val().trim(),
            maxStudents: $("#spaces-input").val().trim(),
            price: $("#price-input").val().trim(),
            photo: $("#photo-input").val().trim(),
            category: $("#category-input").val()
        };

        if (!(
            newClass.title && 
            newClass.description && 
            newClass.instructor &&
            newClass.category && 
            newClass.date && 
            newClass.starttime && 
            newClass.endtime && 
            newClass.location && 
            newClass.maxStudents && 
            newClass.price && 
            newClass.photo &&
            newClass.category)) {
                alert("You must enter all information!");
                return;
        }

        API.createClass(newClass);

        $("#title-input").val("");
        $("#description-input").val("");
        $("#instructor-input").val("");
        $("#date-input").val("");
        $("#starttime-input").val("");
        $("#endtime-input").val("");
        $("#location-input").val("");
        $("#spaces-input").val("");
        $("#price-input").val("");
        $("#photo-input").val("");
        $("#category-input").val("");
    };

    // When some clicks the "Create Class" button...
    $("#createclass-btn").on("click", handleNewClassSubmit);

});