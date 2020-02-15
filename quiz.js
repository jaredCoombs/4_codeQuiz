
button.addEventListener("click", function (event) {
  myInterval = setInterval(function () {
    time--;
    title.innerHTML = time;
  }, 1000);

  var start = document.getElementById("start");
  var quiz = document.getElementById("quiz");
  var question = document.getElementById("question");
  var choiceA = document.getElementById("A");
  var choiceB = document.getElementById("B");
  var choiceC = document.getElementById("C");
  var counter = document.getElementById("counter");
  var timeGauge = document.getElementById("timeGauge");
  var scoreDiv = document.getElementById("scoreContainer");

  var button = document.getElementById("button");
  var title = document.getElementById("timer");
  var time = 60;
  var myInterval;




  let questions = [
    // five questions
    //choices
    {
      question: "What does HTML stand for?",
      choiceA: "Hyperactive Test Mode Length",
      choiceB: "Hyper Tetxt Markup Language",
      choiceC: "High Timed Math Logic",
      correct: "B",


      question: "Is HTML a programming language?",
      choiceA: "Yes",
      choiceB: "No",
      choiceC: "Only on Monday",
      correct: "B",


      question: "What do you use to make a plain webpage look pretty?",
      choiceA: "Hyperactive Test Mode Length",
      choiceB: "Cascade Style Sheets",
      choiceC: "Cascade Markup Language",
      correct: "A",


      question: "what isNaN?",
      choiceA: "isNan function returns true if the argument is not a number otherwise it is false.",
      choiceB: "is someone's grandma",
      choiceC: "It's not really a thing",
      correct: "A",

      question: "Which Company developed JavaScript?",
      choiceA: "Disney",
      choiceB: "Am General",
      choiceC: "Netscape",
      correct: "A",

    }



  ]








});