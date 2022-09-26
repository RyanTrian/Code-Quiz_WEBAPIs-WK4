// header
const viewHighScoreEl = document.getElementById("view-highscore");
const timerEl =document.getElementById("timer")
// Start/welcoming Interface
const containerStartEl = document.getElementById("start-container");
const startBtn =document.getElementById("start-quiz");
// Quiz Interface
const containerQuestionEl = document.getElementById("question-container");
const questionEl =document.getElementById("question");
const answersEl =document.getElementById("answers");
// Score Interface


// array of questions
const quizList = [
    { 
        question: "",
        choices: {
            1: "" ,
            2: "" ,
            3: "" ,
            4: "" ,
        },
        answer: "",
    },
    { 
        question: "",
        choices: {
            1: "" ,
            2: "" ,
            3: "" ,
            4: "" ,
        },
        answer: "",
    },
    { 
        question: "",
        choices: {
            1: "" ,
            2: "" ,
            3: "" ,
            4: "" ,
        },
        answer: "",
    },
    // { 
    //     question: "",
    //     choices: {
    //         1: "" ,
    //         2: "" ,
    //         3: "" ,
    //         4: "" ,
    //     },
    //     answer: "",
    // },
]

