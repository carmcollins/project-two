$(document).ready(function () {


    // The API object contains methods for each kind of request we'll make for users
    var API = {
        createUser: function (newUser) {
            return $.ajax({
                type: "POST",
                url: "api/user",
                data: JSON.stringify(newUser)
            });
        },
        getUser: function () {
            return $.ajax({
                url: "api/user" + newUser.name + newUser.password,
                type: "GET"

            });
        }
    };


    // handleFormSubmit is called whenever we submit a new User
    // Save the new example to the db 
    var handleNewUserSubmit = function (event) {
        event.preventDefault();

        var newUser = {
            name: $("#user-name").val().trim().toLowerCase(),
            email: $("#user-email").val().trim(),
            phone: $("#user-phone").val().trim(),
            password: $("#user-password").val().trim(),
            photo: $("#user-photo").val().trim()
        };

        if (!(newUser.name && newUser.email && newUser.phone && newUser.password)) {
            alert("You must enter all information!");
            return;
        }

        API.createUser(newUser)

        $("#user-name").val(""),
            $("#user-email").val(""),
            $("#user-phone").val(""),
            $("#user-password").val(""),
            $("#user-photo").val("")
    };

    // handleSignUpClick is called when a user is on the more info page for the specific class and clicks on the sign-up
    var handleSignUpClick = function () {

        var idOfClass = $(this)
            .parent()
            .attr("data-id");

        API.deleteExample(idToDelete).then(function () {
            refreshExamples();
        });
    };

    // Add event listeners to the submit and delete buttons
    $("#submit").on("click", handleNewUserSubmit);
   $("#sign-up").on("click", handleDeleteBtnClick);



});