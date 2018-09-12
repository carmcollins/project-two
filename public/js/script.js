$(document).ready(function(){

  $(".stripe-button").hide();

  // Makes the sidebar nav collapsible / functional on mobile
  $(".sidenav").sidenav();

  // Adds parallax scrolling to intro image in index.html
  $(".parallax").parallax();

  // Allows users to pick date & time from a pop-up calendar
  $(".datepicker").datepicker();
  $(".timepicker").timepicker();

  // Allows users to select categories in drop down menu
  $("select").formSelect();
  $("#createclass-btn").on("click", function() {
    $("select").formSelect();
  });

  // By default, show sign up form + hide log in form
  $("#signup-form").show();
  $("#login-form").hide();

  // Hides sign up form + shows log in form
  $("#login-here").on("click", function() {
    $("#signup-form").hide();
    $("#login-form").show();
  });

  // Hides log in form + shows sign up form
  $("#signup-here").on("click", function() {
    $("#signup-form").show();
    $("#login-form").hide();
  });

  // Hides sign-up button + shows pay button
  $(".signup-btn").on("click", function() {
    $(".stripe-button").show();
    $(".signup-btn").hide();
  });



});