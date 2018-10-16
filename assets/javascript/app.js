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
    answer: "Lae Baikal"
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
    answer: "Texas"
}

questionArray = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10]



var points = 0;

 
var newQuestion;

var currentQuestion = -1;

var questionTimer = setTimeout(function(){
    nextQuestion(currentQuestion);
},30000);

function nextQuestion(inputQuestion){
    newQuestion = questionArray[inputQuestion + 1];
    currentQuestion++;
    return newQuestion;
}


$("#play").on("click", function(){
    nextQuestion(currentQuestion);
    $("#triviaTitle").hide();
    $("#play").hide();
    $("#instructions").hide();
    writeQuestion();
    console.log(newQuestion);
    console.log(currentQuestion);
});

function writeQuestion(){
    $(".jumbotron").append("<div class='question'>" +newQuestion.question+ "</div><br class='spacing'>" );
    $(".jumbotron").append("<center><a class='btn btn-primary btn-sm answer' href='#' role='button'>" +newQuestion.a+ "</a></center><br class='spacing'>");
    $(".jumbotron").append("<center><a class='btn btn-primary btn-sm answer' href='#' role='button'>" +newQuestion.b+ "</a></center><br class='spacing'>");
    $(".jumbotron").append("<center><a class='btn btn-primary btn-sm answer' href='#' role='button'>" +newQuestion.c+ "</a></center><br class='spacing'>");
    $(".jumbotron").append("<center><a class='btn btn-primary btn-sm answer' href='#' role='button'>" +newQuestion.d+ "</a></center><br class='spacing'>");
}

$("body").on("click", ".answer", function(){
    if(newQuestion.a == newQuestion.answer){
        points++;
        nextQuestion(currentQuestion);
        $(".question").hide();
        $(".answer").hide();
        $(".spacing").hide();
        writeQuestion();
        console.log(points);
    }
    else{
        nextQuestion(currentQuestion);
        $(".question").hide();
        $(".answer").hide();
        $(".spacing").hide();
        writeQuestion();
        console.log(points);
    }
})

function restartGame(){
    $("#triviaTitle").show();
    $("#play").show();
    $("#instructions").show();
}

});