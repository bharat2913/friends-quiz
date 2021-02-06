var readLineSync = require("readline-sync");

var score = 0;
var questions = [
    {
        question : "Who did Rachel almost marry\n",
        answer: "barry"
    },
    {
      question: "Where are Ross, Rachel, and Monica from\n",
        answer: "long island"
    },
    {
        question: " Who is paleontologist\n",
        answer: "ross"
    },
    {
        question: "What does joey do for Work\n",
        answer: "Actor"
    },
    {
        question: "What show do Joey and chandler love to watch\n",
        answer: "baywatch"
    },
    {
        question: "What is the neighbour's name that lives below Rachel and monica\n",
        answer: "mr. heckles"
    }
];

function welcome(){
    var userName =readLineSync.question("Enter your name:");
    console.log("\nWelcome, " + userName +"\n Let's see How well you remember Friends\n")
}

var options = [
    {
        option: "1 - Barry     2 - Paolo \n" +
                         "3 - Richard   4 - Joey"
    },
    {
        option: "1 - Connecticut    2 - Long Island \n" +
                         "3 - New Jersey    4 - Westchester"
    },
    {
        option: "1 - Joey   2 - Ross \n" +
                         "3 - Chandler  3 - Monica"
    },
    {
        option: "1 - Singer    2 - Model \n" +
                         "3 - Actor     4 - Nothing"
    },
    {
        option: "1 - Jeopardy  2 - Baywatch \n" +
                         "3 - Wheel of Fortune    4 - Days of our Lives"
    },
    {
        option: "1 - Mr. Heckles   2 - Mr. Treiger \n" +
                         "3 - Gunther       3 - Mr. Sheck"
    }
];

function play(question, answer, option){
    // var userAnswer = readLineSync.question(question);
    console.log(question.toString())

    console.log(option)
    var userAnswer = readLineSync.question();

    if (userAnswer.toLowerCase() === answer.toLowerCase()){
        console.log("Yayyy!! \n You are Right!!")
        score += 1;
    }else {
        console.log("Aah! You are wrong \n Correct Answer : " + answer)
    }
    // console.log("Current Score : " + score)
    console.log("----------------------")
}

function game(){
for (var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
var currentOption = options[i];
    play(currentQuestion.question,currentQuestion.answer,currentOption.option);
    }
}

function showScore(){
    console.log("Yayy!! You Scored: " + score)
}



welcome();
game();
showScore();
// console.log("Hello Wrold")