
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
var button = document.getElementById("button");
var quiz = documenet.getElemementById("quiz");
var timer = 60;
var myInterval;

button.addEventListener("click", function (event) {
  myInterval = setInterval(function () {
    time--;
    title.innerHTML = time;
  }, 1000);
});
//quiz in a container
//questions


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


//incorrect answer = time penalty
//timer
// constant countdown



    // ten second penalty with incorrect answers

//score container
//clock visible at all times
  //counter reaches 0 game over
  // game over add initials
  // top 10?


