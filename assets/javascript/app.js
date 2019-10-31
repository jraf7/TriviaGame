
$(document).ready(function(){

$(".content").hide();

$("#startButton").on("click", startTimer);
let correct = 0;
let incorrect = 0; 
let unanswered = 0;

let timeLeft = 120;
function startTimer (){
     $("#time").text(timeLeft + " seconds");
     setInterval(countdown, 1000);
     $("#startButton").hide();
     $(".content").show();
     $(".results").hide();
     displayQuestions();
 };

function countdown (){
 timeLeft--;
 $("#time").text(timeLeft);
 if(timeLeft == 0) {
     stopTimer();
     $("#time").empty();
     endDisplay();
 }
 };
function stopTimer (){
    clearInterval();
    checkAnswers();
    $("#time").empty();
 };

 function endDisplay (){
     $(".results").show();


 };

 function displayQuestions (){
    for (let i = 0; i < questionsArr; i++){
        let questions = questionsArr[i].questions
        $(".qSpace").text(questions);
        let answers = questionsArr[i].answers
        for (let j = 0; j < answers.length; j++){
            answers[j]
        }
    }
 };

 function checkAnswers (){

 };








const questionsArr = [
    [   {"questions": "What is cow meat called?"},
        {"correct": "beef" }],
        {"answers" : ["beef", "poultry", "pork", "fish"]}
    [   {"questions": "Cows naturally have 4 legs. True or False" },
        {"correct": "true" }],       
        {"answers" : ["true", "false"]}
    [   { "questions": "Cows have 32 teeth. True or False"},
        { "correct": "true" }],
        {"answers" : ["true", "false"]}
    [   { "questions": "Female cows produce milk."},
        { "correct" : "true" }],
        {"answers" : ["true", "false"]}
    ];
})
