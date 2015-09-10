var countUp = function(countTo, multiple) {

    var output = [];
    var times = countTo / multiple;

    if (countTo < multiple) {
        return "Please enter a number that is smaller than the number you want to count to.";
    } else {
      if (countTo % multiple === 0) {
        for (var i = 1; i <= times; i++) {
          var result = i * multiple;
          output.push(result);
        }
      } else {
        for (var i = 1; i <= Math.floor(times); i++) {
          var result = i * multiple;
          output.push(result);
        }
      }
    }

    return output.join(', ');
};


$(document).ready(function(){
  $("form#countUp").submit(function(event) {
    var number = parseInt($("input#number").val());
    var multiple = parseInt($("input#multiple").val());
    var result = countUp(number, multiple);

    $(".numbers").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
