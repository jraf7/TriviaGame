
$(document).ready(function(){

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

let correct = 0;
let incorrect = 0; 
let unanswered = 0;
let timer = 0;


$(".timer-div").hide();
$(".answer").hide();
$("#startbtn").show();
$("#subbtn").hide();

// Start Btn Press
$("#startbtn").on("click", function(){

$(".timer-div").show();
$(".answers").show();
$("#startbtn").hide();
$("#subbtn").show();
$


});

});

