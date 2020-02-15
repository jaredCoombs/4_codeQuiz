
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

button.addEventListener("click", function (event) {
  myInterval = setInterval(function () {
    time--;
    title.innerHTML = time;
  }, 1000);


  let questions = [
    // five questions
    //choices
    {
      question: "What does HTML stand for?",
      choiceA: "Hyperactive Test Mode Length",
      choiceB: "Hyper Tetxt Markup Language",
      choiceC: "High Timed Math Logic",
      correct: "A",


      question: "Is HTML a programming language?",
      choiceA: "Hyperactive Test Mode Length",
      choiceB: "anser",
      choiceC: "answer",
      correct: "A",


      question: "What do you use to make a plain webpage look pretty?",
      choiceA: "Hyperactive Test Mode Length",
      choiceB: "anser",
      choiceC: "answer",
      correct: "A",


      question: "What does HTML stand for?",
      choiceA: "Hyperactive Test Mode Length",
      choiceB: "anser",
      choiceC: "answer",
      correct: "A",

      question: "What does HTML stand for?",
      choiceA: "Hyperactive Test Mode Length",
      choiceB: "anser",
      choiceC: "answer",
      correct: "A",

    }



  ]








});