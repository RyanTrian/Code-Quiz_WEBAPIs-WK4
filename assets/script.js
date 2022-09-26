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
const submitBtn = document.getElementById("submit");
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
      {option: "Norwegian Ridgeback"},
      {option: "Chinese Fireball"},
      {option: "Hungarian Horntail"},
      {option: "Common Welsh Green"},
    ],
    answer: "Norwegian Ridgeback",
  },
  {
    question:
      "What colour was the Weasley jumper than Harry got as a Christmas present?",
    choices: [
      {option: "Blue"},
      {option: "Brown"},
      {option: "Emerald green"},
      {option: "Maroon"},
  ],
    answer: "Emerald green",
  },
  {
    question:
      "During the Sorting Ceremony, who was the first student to be sorted into Gryffindor?",
    choices: [
      {option: "Dean Thomas"},
      {option: "Lavender Brown"},
      {option: "Hermione Granger"},
      {option: "Parvati Patil"},
],
    answer: "Lavender Brown",
  },
  {
    question:
      "On the giant wizard chessboard through the trapdoor, what chess piece did Hermione play as?",
    choices: [
      {option: "Castle"},
      {option: "Bishop"},
      {option: "Knight"},
      {option: "Pawn"},
    ],
    answer: "Castle1",
  },
  {
    question:
      "In the Philosopher’s Stone, what was the first password to the Gryffindor common room?",
    choices: [
      {option: "Fortuna Major"},
      {option: "Caput Draconis"},
      {option: "Pig Snout"},
      {option: "Wattlebird"},
    ],
    answer: "Caput Draconi",
  },
  {
    question:
      "What did the first-years have to do as the practical part of their Transfiguration exam?",
    choices: [
      {option: "Turn a hedgehog into a pin cushion"},
      {option: "Turn a rat into a goblet"},
      {option: "Turn a mouse into a snuff-box"},
      {option: "Turn a toad into a balloon"},
    ],
    answer: "Turn a mouse into a snuff-box",
  },
  {
    question:
      "How many new computer games did Dudley receive for his birthday?",
    choices: [
      {option: "12"},
      {option: "18"},
      {option: "9"},
      {option: "16"},
    ],
    answer: "16",
  },
  {
    question:
      "On Harry’s school list, what material did it say his cauldron should be made from?",
    choices: [
      {option: "Pewter"},
      {option: "Iron"},
      {option: "Steel"},
      {option: "Gold"},
    ],
    answer: "Pewter",
  },
];
// Start Quiz after click Start button
var startQuiz = function () {
  //add classes to show/hide start and quiz screen
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
  timeLeft = 40;

  var timercheck = setInterval(function () {
    timerEl.innerText = timeLeft;
    timeLeft--;

    if (quizEnd) {
      clearInterval(timercheck);
    }
    if (timeLeft < 0) {
      //   showScore();
      clearInterval(timercheck);
    }
}, 1000);
};

function setQuestion() {
    removeAnswers();
    displayQuestion(randomQuestionOrder[currentQuestionIndex]);
}

function removeAnswers() {
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.lastChild);
  }
}

function displayQuestion(index) {
  questionEl.innerText = index.question;
  for (var i = 0; i < index.choices.length; i++) {
    var answerbutton = document.createElement("button");
    answerbutton.innerText = index.choices[i].option;
    answerbutton.addEventListener("click", checkAnswer);
    answersEl.appendChild(answerbutton);
  }
}

function checkAnswer() {

}
startBtn.addEventListener("click", startQuiz);
