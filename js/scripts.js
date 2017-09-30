$(document).ready(function() {
  $("#Role Dice").click(function(event) {
    event.preventDefault();
    var randomNum = math.floor((math.random() * 6) + 1);
    $("#Role Dice").append(random)
  });
});
