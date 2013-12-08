var Trigger = Trigger || {};

Trigger.trigger = function(event) {
  Trigger.sendRequest(event);
};

Trigger.sendRequest = function(data) {
  console.log('yay - send request');
  console.log(data);
  $('.request').html('you asked your dog to fetch. great job owner human.');
  return $.ajax({
    url: '/dogs/trigger/',
    type: 'post',
    data: data || {}
  });
};

Trigger.canTrigger = true;

Trigger.graceMagnitude = 11;

Trigger.captureMotion = function(magnitude) {
  var magnitude = Math.abs(magnitude);

  if (magnitude > Trigger.graceMagnitude && Trigger.canTrigger) {
    Trigger.trigger(magnitude);

    Trigger.canTrigger = false;
    setTimeout(function() {
      Trigger.canTrigger = true;
    }, 500);
  }

};

Trigger.deviceMotionHandler = function(eventData) {
  // Grab the acceleration from the results
  var acceleration = eventData.acceleration;
  var event = Math.sqrt(
    Math.pow(acceleration.x, 2) +
    Math.pow(acceleration.y, 2) +
    Math.pow(acceleration.z, 2)
  )

  Trigger.captureMotion(event);
};

Trigger.setup = function() {
  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', Trigger.deviceMotionHandler, false);
  } else {
    alert("Your device cannot cast spells. Try an iOS or Android wand...")
    return;
  }

  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', Trigger.deviceMotionHandler, false);
  } else {
    alert("Your device cannot cast spells. Try an iOS or Android wand...")
    return;
  }
};

$(document).ready(function(){
  $('button').on("touchstart click", function(){
    Trigger.setup();
  });
});


