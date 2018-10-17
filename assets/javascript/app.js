//--------Logic---------//
//Loading the page will reset the game
    //Show main title, directions, play button
    //Hide score, timer, questions
    //Reset score/timer/questions
    //Hide any questions divs(?)

//Hitting play button starts the game
    //Start first question
    //Hides starting display

//Starting question
    //Starts a 30 second timer
    //Display timer dib
    //Passes question object into divs
        //Question into display div
        //Each answer in own div below
        //Corresponding buttons for each div
    //Clicking answer button submits answer and compares to correct answer
    //If correct answer, +1 point, next question
    //If not correct answer, next question
    //If timer runs out, next question

//Finishing last question will bring you to results screen
    //Pass points into div


//--------Variables-------//

$(document).ready(function () {

var Q1 = {
    question: "Relative to it's weight, which big cat has the strongest bite?",
    a: "Tiger",
    b: "Jaguar",
    c: "Panther",
    d: "Lion",
    answer: "Jaguar"
}

var Q2 = {
    question: "How many states are there in Germany?",
    a: "13",
    b: "14",
    c: "15",
    d: "16",
    answer: "16"
}

var Q3 = {
    question: "Which NHL team has won the most Stanley Cups?",
    a: "Montreal Canadiens",
    b: "Toronto Maple Leafs",
    c: "Detroit Red Wings",
    d: "Boston Bruins",
    answer: "Montreal Canadiens"
}

var Q4 = {
    question: "What is Barbie's full name?",
    a: "Barb Hansen",
    b: "Barbara Carson",
    c: "Barbara Roberts",
    d: "Barb Jones",
    answer: "Barbara Roberts"
}

var Q5 = {
    question: "In what year did The Beatles release their first album?",
    a: "1961",
    b: "1962",
    c: "1963",
    d: "1964",
    answer: "1963"
}

var Q6 = {
    question: "What is the deepest lake in the world?",
    a: "Lake Tanganyika",
    b: "Lake Baikal",
    c: "Lake Vostok",
    d: "Lake Malawi",
    answer: "Lake Baikal"
}

var Q7 = {
    question: "What is the second most abundant element in the human body?",
    a: "Carbon",
    b: "Hydrogen",
    c: "Nitrogen",
    d: "Oxygen",
    answer: "Carbon"
}

var Q8 = {
    question: "Where did Christopher Columbus first make landfall in the Americas?",
    a: "Hispaniola",
    b: "Puerto Rico",
    c: "Guatemala",
    d: "The Bahamas",
    answer: "The Bahamas"
}

var Q9 = {
    question: "Which item is most frequently purchases at Walmart stores in the United States?",
    a: "Toilet paper",
    b: "Diapers",
    c: "Mountain Dew",
    d: "Bananas",
    answer: "Bananas"
}

var Q10 = {
    question: "Which state has produced the most U.S. presidents?",
    a: "Virginia",
    b: "Ohio",
    c: "New York",
    d: "Texas",
    answer: "Virginia"
}

questionArray = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10]

var gameOver = false;

var points = 0;

var newQuestion;

var currentQuestion = -1;

//Timer variables
var clockRunning= false;

var intervalID;

//Timer object
var timer = {
    time: 10,

reset: function() {
    timer.time = 10;
    $("#timer").html("10")
},

start: function() {
    if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
    }    
},

count: function() {
  timer.time--;
  $("#timer").html(timer.time);
  if(timer.time == 0 && gameOver == false){
    timesUp();
}}
};

//Triggers the timesUp screen when 30 seconds passes without answering
function timesUp(){
    $("#timer").hide();
    $(".question").hide();
    $(".answer").hide();
    $(".spacing").hide();
    $(".jumbotron").append("<h1 class='display-4 timesUp'><center>Time's up!</center></h1><br class='spacing'>" );
    $(".jumbotron").append("<center><div class='quicker'>Gotta be quicker than that.</div></center><br class='spacing'>" );
    $("#timesUp").show();
    $("#quicker").show();
    setTimeout(function(){
        if(newQuestion == Q10){
            $(".question").hide();
            $(".answer").hide();
            $(".spacing").hide();
            $(".timesUp").hide();
            $(".quicker").hide();
            $(".spacing").hide();
            endGame();
        }
        else{
        nextQuestion(currentQuestion);
        writeQuestion();
        timer.reset();
        }
      }, 3000);
}

//Calculates what the next question/answer set will be
function nextQuestion(inputQuestion){
    newQuestion = questionArray[inputQuestion + 1];
    currentQuestion++;
    return newQuestion;
}

//Starts the game
$("#play").on("click", function(){
    nextQuestion(currentQuestion);
    $("#triviaTitle").hide();
    $("#play").hide();
    $("#instructions").hide();
    writeQuestion();
    console.log(newQuestion);
    console.log(currentQuestion);
    timer.reset();
});

//Writes out the current timer, question and answers to the jumbotron. Starts the timer.
function writeQuestion(){
    $(".realAnswer").hide();
    $(".correct").hide();
    $(".timesUp").hide();
    $(".quicker").hide();
    $(".spacing").hide();
    $(".jumbotron").append("<center><div id='timer'></div></center>");
    $("#timer").show();
    timer.start();
    $(".jumbotron").append("<div class='question'>" +newQuestion.question+ "</div><br class='spacing'>" );
    $(".jumbotron").append("<center><a class='btn btn-primary btn-sm answer' href='#' role='button'>" +newQuestion.a+ "</a></center><br class='spacing'>");
    $(".jumbotron").append("<center><a class='btn btn-primary btn-sm answer' href='#' role='button'>" +newQuestion.b+ "</a></center><br class='spacing'>");
    $(".jumbotron").append("<center><a class='btn btn-primary btn-sm answer' href='#' role='button'>" +newQuestion.c+ "</a></center><br class='spacing'>");
    $(".jumbotron").append("<center><a class='btn btn-primary btn-sm answer' href='#' role='button'>" +newQuestion.d+ "</a></center>");
};

//Displays "correct" message after answering a question correctly
function correctAnswer(){
    if(newQuestion == Q10){
        $("#timer").hide();
        $(".jumbotron").append("<h1 class='display-4 correct'><center>Correct!</center></h1><br class='spacing'>" );
        setTimeout(function(){
        endGame();
        }, 3000);
    }
    else{
    $("#timer").hide();
    $(".jumbotron").append("<h1 class='display-4 correct'><center>Correct!</center></h1><br class='spacing'>" );
    setTimeout(function(){
        nextQuestion(currentQuestion);
        writeQuestion();
        timer.reset();
    }, 3000);
    }
};

//Displays when you answer wrong, and shows what the correct answer was
function wrongAnswer(){
    if(newQuestion == Q10){
        $("#timer").hide();
        $(".jumbotron").append("<h1 class='display-4 correct'><center>Wrong!</center></h1><br class='spacing'>" );
        $(".jumbotron").append("<div class='realAnswer'><center>The correct answer was: "+newQuestion.answer+"</center></div><br class='spacing'>" );
        setTimeout(function(){
        endGame();
        }, 3000);
    }
    else{
    $("#timer").hide();
    $(".jumbotron").append("<h1 class='display-4 correct'><center>Wrong!</center></h1><br class='spacing'>" );
    $(".jumbotron").append("<div class='realAnswer'><center>The correct answer was: "+newQuestion.answer+"</center></div><br class='spacing'>" );
    setTimeout(function(){
        $(".realAnswer").hide();
        $(".correct").hide();
        $(".timesUp").hide();
        $(".quicker").hide();
        $(".spacing").hide();
        nextQuestion(currentQuestion);
        writeQuestion();
        timer.reset();
    }, 3000)
} 
};

//Answer clicking logic - logs a point if correct and advances to next question, unless last question
$("body").on("click", ".answer", function(){
    console.log('current Question='+currentQuestion);
    var answerClicked= $(this).text();
    console.log(answerClicked);
    if(newQuestion == Q10 && answerClicked == Q10.answer){
        points++;
        $(".question").hide();
        $(".answer").hide();
        $(".spacing").hide();
        correctAnswer();
    }
    else if(newQuestion == Q10 && answerClicked != Q10.answer){
        $(".question").hide();
        $(".answer").hide();
        $(".spacing").hide();
        wrongAnswer();
    }
    else if(answerClicked == newQuestion.answer){
        points++;
        $(".question").hide();
        $(".answer").hide();
        $(".spacing").hide();
        correctAnswer();
        console.log(points);
    }
    else{
        $(".question").hide();
        $(".answer").hide();
        $(".spacing").hide();
        wrongAnswer();
    }
})

//Ends the game after answering all of the questions
function endGame(){
    gameOver = true;
    $(".realAnswer").hide();
    $(".correct").hide();
    $("#timer").hide();
    $(".jumbotron").append("<h1 class='display-4 thanks'><center>Thanks for playing!</center></h1><br class='spacing'>" );
    $(".jumbotron").append("<center><div class='score'>You scored "+points+"/10 points!</div></center><br class='spacing'>");
    $(".jumbotron").append("<center><a class='btn btn-primary btn-lg again' href='#' role='button'>Play again?</a></center>");
}

//Button to restart the game
$("body").on("click", ".again", function(){
    restartGame();
});

//Restarts a game by clicking the again button above
function restartGame(){
    $(".thanks").remove();
    $(".score").remvoe();
    $(".again").remove();
    $(".spacing").hide();
    $("#triviaTitle").show();
    $("#play").show();
    $("#instructions").show();
    points = 0;
    currentQuestion = -1;
    gameOver = false;
}

});