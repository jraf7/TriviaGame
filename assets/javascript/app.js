let countdown = 25;
let right = 0;
let wrong = 0;

renderStartButton();


function renderStartButton () {
    let startButton = $("<button>")
        .text("Start!")
        .addClass("buttonClass btn btn-lrg btn-secondary")
        .on("click", function (){
            renderQuestions();
        })

    $("#content").append(startButton);
};

function renderQuestions () {
    $("#content").empty();
    let timer = $("<div>").text(`Time Remaining: ${countdown}`);
    $("#content").append(timer);
    interval = setInterval(function () {
        if(countdown === 0) {
            clearInterval(interval);
            getResult();
            renderResult();
        } else {
            countdown--;
            timer.text(`Time Remaining: ${countdown}`);
        }
    }, 1000);

    questionsArr.forEach( function (question) {
        let mcQuestion = $("<div>").addClass("question");
        let prompt = $("<div>").text(question[0].questions);
        mcQuestion.append(prompt);
        let set = $("<fieldset>").attr("id", `group${question[3].id}`);
        for (let i = 0; i < 4; i++){
            let label = $("<label class='radio-inline'>")
                .html(`<input key='${i}' type="radio" name="group${question[3].id}" value='${question[2].answers[i]}'> ${question[2].answers[i]}`)
                .css('font-size', '14px').css('margin-right', '20px');
            set.append(label);
        };
        mcQuestion.append(set);
        $("#content").append(mcQuestion);
    })
    let finishButton = $("<button>").text("Finish!").addClass("buttonClass btn btn-lrg btn-secondary");
    finishButton.on("click", function () {
        clearInterval(interval);
        getResult();
        renderResult();
    });
    $("#content").append(finishButton);
};

function getResult () {
   let checked = $(":checked");
   for (let i = 0; i < checked.length; i++) {
           if (checked[i].value === questionsArr[i][1].correct) {
        right++;
       } else {
        wrong++;
       }
   };
};

function renderResult () {
    $("#content").empty();
    let outro = $("<h3>");
    if (right > wrong) {
        outro.text("Winner. You're a smart cookie!")
    } else {
        outro.text("Loser. You're a mad cow.")
    }
    let wins = $("<h4>").text(`Correct: ${right}`);
    let losses = $("<h4>").text(`Wrong: ${wrong}`);
    let retry = $("<button>").on("click", function () {
        wrong = 0;
        right = 0;
        countdown = 25;
        $("#content").empty();
        renderStartButton();
    });
    retry.text("Try Again?")
    $("#content").append(outro, wins, losses, retry);
}


const questionsArr = [
    [   {"questions": "What is cow meat called?"},
        {"correct": "beef" },
        {"answers" : ["beef", "poultry", "pork", "fish"]},
        {"id": 1}
    ],
    [   {"questions": "Cows naturally have how many legs?" },
        {"correct": "4" },
        {"answers" : ["1", "2", "3", "4"]},
        {"id": 2}
    ],
    [   { "questions": "What is a cow with no legs called?"},
        { "correct": "ground beef" },
        {"answers" : ["ground beef", "shoe", "tuna", "birds"]},
        {"id": 3}
    ],
    [   { "questions": "Cows are what type of animal?"},
        { "correct" : "mammals" },
        {"answers" : ["mythical", "mammals", "reptiles", "angiosperms"]},
        {"id": 4}
    ]
];
