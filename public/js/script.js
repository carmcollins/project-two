$(document).ready(function(){
  // Makes the sidebar nav collapsible / functional on mobile
  $('.sidenav').sidenav();

  // Adds parallax scrolling to intro image in index.html
  $('.parallax').parallax();

  // Allows users to pick date & time from a pop-up calendar
  $('.datepicker').datepicker();
  $('.timepicker').timepicker();

  // Allows users to be able to select multiple categories in drop down menu
  $('select').formSelect();
});