
var button = document.getElementById("button");
var title = document.getElementById("timer");
var time = 60;
var myInterval;

button.addEventListener("click", function (event) {
  myInterval = setInterval(function () {
    time--;
    title.innerHTML = time;
  }, 1000);

});