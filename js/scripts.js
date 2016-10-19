$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var usernameInput = $("input#user-name").val();
    var dateInput = $("input#appointmentDate").val();
    var startInput = $("input#startTime").val();
    var endInput = $("input#endTime").val();

    $(".userName").text(usernameInput);
    $(".appointmentDate").text(dateInput);
    $(".startTime").text(startInput);
    $(".endTime").text(endInput);

    event.preventDefault();
  });
});
