$(document).ready(function() {
  var dogId = 1
  $.ajax({
    type: "GET",
    url: "dogs/" + dogId,
    dataType: "script"
  });
})
