
var count
var timer
var button = document.getElementById("button");
var quiz = documenet.getElemementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var timer = documenet.getElementById("timer");
var scoreDiv = document.getElementById("score")
var hiScore = document.getElementById("hiScore");


// container for start quiz
// begin with a start button

//quiz in a container
//questions
let questions = [
  // five questions
  //choices
  {
    question: "What does HTML stand for?"
      choiceA: "Hyperactive Test Mode Length"
      choiceB: "anser"
      choiceC: "answer"
      correct: "A"

  }
  {
    question: "Is HTML a programming language?"
      choiceA: "Hyperactive Test Mode Length"
      choiceB: "anser"
      choiceC: "answer"
      correct: "A"

  }

  {
    question: "What do you use to make a plain webpage look pretty?"
      choiceA: "Hyperactive Test Mode Length"
      choiceB: "anser"
      choiceC: "answer"
      correct: "A"

  }
  {
    question: "What does HTML stand for?"
      choiceA: "Hyperactive Test Mode Length"
      choiceB: "anser"
      choiceC: "answer"
      correct: "A"

  }

  {
    question: "What does HTML stand for?"
      choiceA: "Hyperactive Test Mode Length"
      choiceB: "anser"
      choiceC: "answer"
      correct: "A"

  }






]

var lastQuestion = questions.length - 1;
let runningQuestion = 0;

// function to render qestion
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "<p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

Start.style.display = "none";
renderQuestion();
quiz.style.display = "block";

//render progress
function renderProgress()

//incorrect answer = time penalty
//timer
// constant countdown

var count = 60
timer = setInterval(function () {
  $('#counter').html(count--);
  if (count == 1) clearInterval(timer);
}, 1000);
    // ten second penalty with incorrect answers

//score container
//clock visible at all times
  //counter reaches 0 game over
  // game over add initials
  // top 10?


