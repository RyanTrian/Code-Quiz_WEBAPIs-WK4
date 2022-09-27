// header
const viewHighScoreEl = document.getElementById("view-highscore");
const timerEl = document.getElementById("timer");
// Start/welcoming Interface
const containerStartEl = document.getElementById("start-container");
const startEl = document.getElementById("start");
const startBtn = document.getElementById("start-quiz");
// Quiz Interface
const containerQuestionEl = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
// Score Interface
const containerScoreEl = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const submissionEl = document.getElementById("submission");
const initialsInt = document.getElementById("initials");
const submitBtn = document.getElementById("submit-score");
// HighScores List
const containerHighscore = document.getElementById("highscore-container");
const highscoresList = document.getElementById("stored-highscores");
const gobackBtn = document.getElementById("go-back");
const clearHighscoresBtn = document.getElementById("clear-highscores");
// Answer correct
const correctEl = document.getElementById("correct");
// Wrong answer
const wrongEl = document.getElementById("wrong");
// Quiz Controling variables
timerEl.innerText = 0;
var timeLeft;
var quizEnd;

var highScores = [];

var randomQuestionOrder;
var currentQuestionIndex = 0;

// array of questions
const quizList = [
  {
    question:
      "What was the name of Hagrid’s three-headed dog that guarded the Philosopher’s Stone?",
    choices: [
      { option: "Tiny" },
      { option: "Bruce" },
      { option: "Snyggles" },
      { option: "Fluffy" },
    ],
    answer: "Fluffy",
  },
  {
    question: "What breed of dragon was Norbert – Hagrid’s baby dragon?",
    choices: [
      { option: "Norwegian Ridgeback" },
      { option: "Chinese Fireball" },
      { option: "Hungarian Horntail" },
      { option: "Common Welsh Green" },
    ],
    answer: "Norwegian Ridgeback",
  },
  {
    question:
      "What colour was the Weasley jumper than Harry got as a Christmas present?",
    choices: [
      { option: "Blue" },
      { option: "Brown" },
      { option: "Emerald green" },
      { option: "Maroon" },
    ],
    answer: "Emerald green",
  },
  {
    question:
      "During the Sorting Ceremony, who was the first student to be sorted into Gryffindor?",
    choices: [
      { option: "Dean Thomas" },
      { option: "Lavender Brown" },
      { option: "Hermione Granger" },
      { option: "Parvati Patil" },
    ],
    answer: "Lavender Brown",
  },
  {
    question:
      "On the giant wizard chessboard through the trapdoor, what chess piece did Hermione play as?",
    choices: [
      { option: "Castle" },
      { option: "Bishop" },
      { option: "Knight" },
      { option: "Pawn" },
    ],
    answer: "Castle1",
  },
  {
    question:
      "In the Philosopher’s Stone, what was the first password to the Gryffindor common room?",
    choices: [
      { option: "Fortuna Major" },
      { option: "Caput Draconis" },
      { option: "Pig Snout" },
      { option: "Wattlebird" },
    ],
    answer: "Caput Draconi",
  },
  {
    question:
      "What did the first-years have to do as the practical part of their Transfiguration exam?",
    choices: [
      { option: "Turn a hedgehog into a pin cushion" },
      { option: "Turn a rat into a goblet" },
      { option: "Turn a mouse into a snuff-box" },
      { option: "Turn a toad into a balloon" },
    ],
    answer: "Turn a mouse into a snuff-box",
  },
  {
    question:
      "How many new computer games did Dudley receive for his birthday?",
    choices: [
      { option: "12" },
      { option: "18" },
      { option: "9" },
      { option: "16" },
    ],
    answer: "16",
  },
  {
    question:
      "On Harry’s school list, what material did it say his cauldron should be made from?",
    choices: [
      { option: "Pewter" },
      { option: "Iron" },
      { option: "Steel" },
      { option: "Gold" },
    ],
    answer: "Pewter",
  },
];
// Start Quiz after click Start button
var startQuiz = function () {
  //add classes to show/hide start and quiz interface
  containerStartEl.classList.remove("show");
  containerStartEl.classList.add("hide");
  containerQuestionEl.classList.remove("hide");
  containerQuestionEl.classList.add("show");
  //Randomize the questions's order
  randomQuestionOrder = quizList.sort(() => 0.5 - Math.random());

  runTimer();
  setQuestion();
};

function runTimer() {
  timeLeft = 70;

  var timercheck = setInterval(function () {
    timerEl.innerText = timeLeft;
    timeLeft--;

    if (quizEnd) {
      clearInterval(timercheck);
    }
    if (timeLeft < 0) {
      scoreScreen();
      clearInterval(timercheck);
    }
  }, 1000);
}

function setQuestion() {
  removeAnswers();
  displayQuestion(randomQuestionOrder[currentQuestionIndex]);
}
// remove all the answer buttons, when it first load and for the next question
function removeAnswers() {
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.lastChild);
  }
}
// put question and answers onto the page
function displayQuestion(index) {
  questionEl.innerText = index.question;
  for (var i = 0; i < index.choices.length; i++) {
    var answerbutton = document.createElement("button");
    answerbutton.innerText = index.choices[i].option;
    answerbutton.addEventListener("click", checkAnswer);
    answersEl.appendChild(answerbutton);
  }
}
// check answer, correct get bonus, and wrong get penalize
function checkAnswer(event) {
  var selectedAnswer = event.target;
  if (
    selectedAnswer.innerText ===
    randomQuestionOrder[currentQuestionIndex].answer
  ) {
    isCorrect();
    timeLeft += 5;
  } else {
    isWrong();
    timeLeft -= 10;
  }

  //go to next question, check if there is more questions
  currentQuestionIndex++;
  if (randomQuestionOrder.length > currentQuestionIndex + 3) {
    setQuestion();
  } else {
    quizEnd = "true";
    scoreScreen();
  }
}
// chosen answer is correct, inidicate correct at the bottom
function isCorrect() {
  if ((correctEl.className = "hide")) {
    correctEl.classList.remove("hide");
    correctEl.classList.add("show");
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
  }
}
// chosen answer is wrong, indicate wrong at the bottom
function isWrong() {
  if ((wrongEl.className = "hide")) {
    wrongEl.classList.remove("hide");
    wrongEl.classList.add("show");
    correctEl.classList.remove("show");
    correctEl.classList.add("hide");
  }
}
// Score page when user lose or run out of time
function scoreScreen() {
  containerQuestionEl.classList.add("hide");
  containerScoreEl.classList.remove("hide");
  containerScoreEl.classList.add("show");

  var scoreDisplay = document.createElement("p");
  if (timeLeft > 40) {
    scoreDisplay.innerText =
      "Your final score is " +
      timeLeft +
      "!<br>" +
      "Glad to meet another Potterhead ⚡";
  } else {
    scoreDisplay.innerText = "Your final score is " + timeLeft + "!";
  }
  scoreEl.appendChild(scoreDisplay);
}
// Create ol's children element li
function createHighScores(event) {
  event.preventDefault();
  var initials = document.querySelector("#initials").value;
  if (!initials) {
    alert("Enter your intials!");
    return;
  }

  initials.innerText = "";

  var HighScore = {
    initials: initials,
    score: timeLeft,
  };

  //push and sort scores
  highScores.push(HighScore);
  highScores.sort((a, b) => {return b.score - a.score;});

  //clear previous ordered-list to resort
  while (highscoresList.firstChild) {
    highscoresList.removeChild(highscoresList.lastChild);
  }
  //create elements in order of high scores
  for (var i = 0; i < highScores.length; i++) {
    var highscoreEl = document.createElement("li");
    highscoreEl.ClassName = "";
    highscoreEl.innerText = highScores[i].initials + " - " + highScores[i].score;
    highscoresList.appendChild(highscoreEl);
  }

  saveHighScore();
  displayHighScores();
}

//save high score to local storage
function saveHighScore() {
  localStorage.setItem("HighScores", JSON.stringify(highScores));
};

//load values/ called on page load
function loadHighScore() {
  var LoadedHighScores = localStorage.getItem("HighScores");
  if (!LoadedHighScores) {
    return false;
  }

  LoadedHighScores = JSON.parse(LoadedHighScores);
  LoadedHighScores.sort((a, b) => {
    return b.score - a.score;
  });

  for (var i = 0; i < LoadedHighScores.length; i++) {
    var highscoreEl = document.createElement("li");
    highscoreEl.ClassName = "";
    highscoreEl.innerText =
      LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
    highscoresList.appendChild(highscoreEl);

    highScores.push(LoadedHighScores[i]);
  }
};

//display high score screen from link or when intiials entered
function displayHighScores() {
  containerHighscore.classList.remove("hide");
  containerHighscore.classList.add("show");
  quizEnd = "true";

  if ((containerScoreEl.className = "show")) {
    containerScoreEl.classList.remove("show");
    containerScoreEl.classList.add("hide");
  }
  if ((containerStartEl.className = "show")) {
    containerStartEl.classList.remove("show");
    containerStartEl.classList.add("hide");
  }

  if ((containerQuestionEl.className = "show")) {
    containerQuestionEl.classList.remove("show");
    containerQuestionEl.classList.add("hide");
  }

  if ((correctEl.className = "show")) {
    correctEl.classList.remove("show");
    correctEl.classList.add("hide");
  }

  if ((wrongEl.className = "show")) {
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
  }
};

loadHighScore();
// Start Click-event
startBtn.addEventListener("click", startQuiz);
// submit initials and score
submitBtn.addEventListener("click", createHighScores);
// View Highscore click Event
viewHighScoreEl.addEventListener("click", displayHighScores)