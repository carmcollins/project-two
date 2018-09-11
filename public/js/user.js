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
        loginUser: function(email, password) {
            $.post("/api/login", {
              email: email,
              password: password
            }).then(function(data) {
              window.location.replace(data);
            }).catch(function(err) {
              console.log(err);
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

    // handleSignUpClick is called when a user clicks on the sign-up button
    var handleSignUpClick = function () {

        var idOfClass = $(this)
            .parent()
            .attr("data-id");
        var userInfo = {
            username: $("#username").val().trim(),
            password: $("#password").val().trim()
        }
        
        API.getUser(userInfo.username, userInfo.password).then(function () {
            API.getClass(idOfClass).then(function () {
            user.addClass(Class.name)
            refreshExamples();
        });
    });
    };


    $("#submit").on("click", handleNewUserSubmit);
    $("#sign-up").on("click", handleSignUpClick);

   $("#logInBtn").on("click", function(event) {
    event.preventDefault();
    var userData = {
      email: $("#inputEmail").val().trim(),
      password: $("#inputPassword1").val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });



});