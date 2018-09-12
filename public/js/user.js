$(document).ready(function () {

    // The API object contains methods for each kind of request we'll make for users
    var API = {
        createUser: function (newUser) {
            return $.ajax({
                type: "POST",
                url: "api/user",
                data: newUser
            });
        },
        getUser: function (username, password) {
            return $.ajax({
                url: "api/user/" + username + "/" + password,
                type: "GET"

            });
        },
        getClass: function (id) {
            return $.ajax({
                url: "api/class/" + id,
                type: "GET"
            });
        },
        loginUser: function (email, password) {
            $.post("/api/login", {
                email: email,
                password: password
            }).then(function (data) {
                window.location.replace(data);
            }).catch(function (err) {
                console.log(err);
            });
        },
        logoutUser: function () {
            return $.ajax({
                url: "/logout",
                type: "GET"
            });
        }
        //   USE THIS TO GET USER INFO
        //   getUserInfo: function() {
        //       return $.ajax({
        //           url: "api/user_data",
        //           type: "GET"
        //       });
        //   } 
    };


    // handleFormSubmit is called whenever we submit a new User
    // Save the new example to the db 
    var handleNewUserSubmit = function (event) {
        event.preventDefault();

        var newUser = {
            name: $("#name-signup").val().trim().toLowerCase(),
            email: $("#email-signup").val().trim(),
            phone: $("#phone-signup").val().trim(),
            password: $("#password-signup").val().trim(),
        };

        if (!(newUser.name && newUser.email && newUser.phone && newUser.password)) {
            alert("You must enter all information!");
            return;
        }

        API.createUser(newUser);

        $("#name-signup").val(""),
            $("#email-signup").val(""),
            $("#phone-signup").val(""),
            $("#password-signup").val("")
    };

    // handleSignUpClick is called when a user clicks on the sign-up button
    // var handleSignUpClick = function () {

    //     var idOfClass = $(this)
    //         .parent()
    //         .attr("data-id");
    //     var userInfo = {
    //         username: $("#username").val().trim(),
    //         password: $("#password").val().trim()
    //     }

    //     API.getUser(userInfo.username, userInfo.password).then(function () {
    //         API.getClass(idOfClass).then(function () {
    //         user.addClass(Class.name)
    //     });
    // });
    // };


    $(".signup-btn").on("click", handleNewUserSubmit);
    // $("#regbutton").on("click", handleSignUpClick);

    $("#logInBtn").on("click", function (event) {
        event.preventDefault();
        var userData = {
            email: $("#email-login").val().trim(),
            password: $("#password-login").val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        API.loginUser(userData.email, userData.password);
        $("#email-login").val("");
        $("#password-login").val("");
    });

    $("#logout-btn").on("click", function (event) {
        ever.preventDefault();
        API.logoutUser();
    })

});