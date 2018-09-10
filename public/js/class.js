$(document).ready(function () {

    var API = {
        createClass: function (newClass) {
            return $.ajax({
                type: "POST",
                url: "api/class",
                data: JSON.stringify(newClass)
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

    // refreshExamples gets new examples from the db and repopulates the list
    var refreshClasses = function () {
        API.getClasses().then(function (data) {
            classes = data.map(function (classInfo) {
                classDiv = $("<div>").text(classInfo.title)
                    .addClass(classInfo.id);

                var classInfoList = $("<li>")
                    .attr({
                        class: "list-group-item",
                        "data-id": classInfo.id
                        //do this for each item per class
                    })
                    .append(classDiv);

                var selectClass = $("<button>")
                    .addClass("btn selectClass")
                    .text("Learn More");

                classInfoList.append(selectClass);

                return classInfoList;
            });

            $("#classList").empty();
            $("#classList").append(classes);
        });
    };

    //   handleNewClassSubmit is called whenever the create a class is clicked
    //   Save the new example to the db and refresh the list

    var handleNewClassSubmit = function (event) {
        event.preventDefault();

        var newClass = {
            title: $("#title-input").val().trim(),
            category: $("#category-input").val().trim(),
            description: $("#description-input").val().trim(),
            date: $("#date-input").val().trim(),
            time: $("#time-input").val().trim(),
            location: $("#location-input").val().trim(),
            maxStudents: $("#spaces-input").val().trim(),
            price: $("#price-input").val().trim(),
            photo: $("#photo-input").val().trim()
        },

        if (!(newClass.title && newClass.description && newClass.category && newClass.date && newClass.time && newClass.location && newClass.maxStudents && newClass.price)) {
            alert("You must enter all information!");
            return;
        }

        API.createClass(newClass).then(function () {
            refreshClasses();
        });

        $("#title-input").val("");
        $("#category-input").val("");
        $("#description-input").val("");
        $("#date-input").val("");
        $("#time-input").val("");
        $("#location-input").val("");
        $("#spaces-input").val("");
        $("#price-input").val("");
        $("#photo-input").val("");
    };

    

    // handlemoreinfoClick is called when a class' moreinfo button is clicked

    var handleMoreInfoClick = function () {
        var idOfClass = $(this)
            .parent()
            .attr("data-id");

        API.getClass(idOfClass).then(function (data) {
            classDisplay = data.map(function (classInfo) {
                classDiv = $("<div>").text(classInfo.title)
                    .addClass(classInfo.id);
                //need to push class info to class html
                //need to add data-id to sign-up button
            });
        });
    };

    // Add event listeners to the submit and more info buttons
    $("#createNewClassButton").on("click", handleNewClassSubmit);
    $("#selectClass").on("click", handleMoreInfoClick);


    



});
  
