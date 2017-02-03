// Count correctAnswer for totalScore later //
var correctAnswer = 0;

// Create function user name //
function name (){
  //Ask User's Name//
  var userName = prompt ('What is your name?');
  alert ('Welcome ' + userName + '!');
  console.log('Welcome ' + userName);
  window.userName = userName;
};
name();

var answers = ['NO','NO','NO','NO'];
var questions = ['Q1. Kenny\'s currently working at Xbox Team (yes/no)', 'Q2. Kenny grauated from Harvard Law School (yes/no)', 'Q3. Kenny recently graduated from college (yes/no)', 'Q4. Kenny has bachelor\'s degree in Human Centered Design & Engineering  (yes/no)','Q5. My favorite color is white (yes/no)'];

//Create function questionOne //
function questionOne() {
  // Ask users question with input//
  var answerOne = prompt(questions[0]);
  // If...Else Statements begins
  if (answerOne.toUpperCase() === answers[0]) {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right!');
    correctAnswer += 1;
  } else {
    alert('Wrong!!! ');
    console.log('Wrong!');
  }
};
questionOne();

// Create function questionTwo //
function questionTwo(){
  // Ask users question with input
  var answerTwo = prompt(questions[1]);
  // If...Else Statements begins
  if (answerTwo.toUpperCase() === answers[1]) {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right!');
    correctAnswer += 1;
  } else {
    alert('Wrong!!! ');
    console.log('Wrong!');
  }
};
questionTwo();

// Create function questionThree //
function questionThree(){
  // Ask users question with input
  var answerThree = prompt(questions[2]);
  // If...Else Statements begins
  if (answerThree.toUpperCase() === answers[2]) {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right!');
    correctAnswer += 1;
  } else {
    alert('Wrong!!! ');
    console.log('Wrong!');
  }
};
questionThree();

// Create function questionFour //
function questionFour(){
  // Ask users question with input
  var answerFour = prompt(questions[3]);
  // If...Else Statements begins
  if (answerFour.toUpperCase() === answers[3]) {
    // This console.log will execute as long as one of all four conditions evaluates to 'True'//
    alert('You got it right! ');
    console.log('You got it right!');
    correctAnswer += 1;
  } else {
    alert('Wrong!!! ');
    console.log('Wrong!');
  }
};
questionFour();

// Create function questionFive //
function questionFive(){
  // Ask users question with input to find out whether user's input is in an array
  var questionFive = prompt('Q5. Which are the organization that Kenny hasn\'t worked previously?  A. Microsoft  B.Best Buy  C. Seattle Seahawks  D. University of Washington');
  // Multiple answers in the array
  var answerFive = ['B','C'];
  // If...Else Statements begins
  if (answerFive.indexOf(questionFive.toUpperCase()) !== -1) {
    alert('You got it right! ');
    console.log('You got it right!');
    correctAnswer += 1;
  } else {
    alert('Wrong!!! ');
    console.log('Wrong!');
  }
};
questionFive();

// Create function questionSix //
function questionSix(){
  // Ask users question with input to find out whether user's input is in an array
  var userPick = prompt('Q6. Guess my number from 1 to 10');
  // Here is the answer for answerSix
  var answerSix = 3;
  var i = 0;
  // Ask users question for four times //
  for (var i = 0; i < 4 ; i++) {
    if (answerSix == userPick) {
      console.log ('You got it right!');
      alert ('You got it right!');
      correctAnswer += 1;
      // Break and move to next question if user pick answerSix //
      break;
    // If userPick is higher than answerSix //
    } else if (answerSix > userPick) {
      console.log ('Too low');
      userPick = parseInt(prompt('Guess my number from 1 to 10'));
    // If userPick is lower than answerSix //
    } else {
      console.log ('Too high');
      userPick = parseInt(prompt('Guess my number from 1 to 10'));
    }
  }
};
questionSix();

// Create function questionSeven //
function questionSeven(){
  // Count the number of attemps that user try for answer //
  var userAnswerAttempts = 0;
  // Here are the answer for answerSeven //
  var answerSeven = ['KOREA', 'CALIFORNIA'];
  // Ask user question to guess input inside of strings, and count how many times user attempts to answer //
  do {
    userAnswerAttempts += 1;
    var userAnswerSeven = prompt('Q7. Can you guess where I was from?');
    // Ask users question to guess input inside of strings, and tell users whether their answer is correct or not //
    if (answerSeven.indexOf(userAnswerSeven.toUpperCase()) !== -1) {
      console.log ('Yes,I\'m from ' + userAnswerSeven.toUpperCase());
      alert ('You got it right! \nI\'m from ' + userAnswerSeven);
      correctAnswer += 1;
    } else {
      console.log ('I\'m not from ' + userAnswerSeven.toUpperCase() +'. Try again!');
      alert ('I\'m not from ' + userAnswerSeven +'. Try again!');
    }
  // until user pick right answer or in six times //
  } while (answerSeven.indexOf(userAnswerSeven.toUpperCase()) === -1 && userAnswerAttempts < 6)
  console.log(userName+ ' tried ' + userAnswerAttempts + ' time(s).');
};
questionSeven();

// Create function totalScore //
function totalScore(){
  //Display the score of the game//
  console.log('You got ' + correctAnswer + ' out of 7 questions correctly.')
  alert('Good job  '+ userName + ', '+ '\nyou got ' + correctAnswer + ' out of 7 questions correctly.')
};
totalScore();
