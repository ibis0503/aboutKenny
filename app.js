//Ask User's Name//
var UserName = prompt ('What is your name?');
alert ('Welcome ' + UserName + '!');
console.log('Welcome ' + UserName);
//Count the correct answers from the users//
var correctAnswer = 0;
//Question One //
var answerOne = prompt('Q1. Kenny\'s currently working at Xbox Team (y/n or yes/no)');
// Ask users question with input//
if (answerOne.toUpperCase() === 'NO' || answerOne.toUpperCase() === 'N' || answerOne.toUpperCase() === 'NOPE' || answerOne.toUpperCase() === 'NAH') {
  // This console.log will execute as long as one of all four conditions evaluates to 'True'//
  alert('You got it right! ');
  console.log('You got it right!');
  correctAnswer += 1;
} else {
  alert('Wrong!!! ');
  console.log('Wrong!');
}
//Question Two //
var answerTwo = prompt('Q2. Kenny grauated from Harvard Law School (y/n or yes/no)');
// Ask users question with input
if (answerTwo.toUpperCase() === 'NO' || answerTwo.toUpperCase() === 'N' || answerTwo.toUpperCase() === 'NOPE' || answerTwo.toUpperCase() === 'NAH') {
  // This console.log will execute as long as one of all four conditions evaluates to 'True'//
  alert('You got it right! ');
  console.log('You got it right!');
  correctAnswer += 1;
} else {
  alert('Wrong!!! ');
  console.log('Wrong!');
}
//Question Three //
var answerThree = prompt('Q3. Kenny recently graduated from college (y/n or yes/no)');
// Ask users question with input
if (answerThree.toUpperCase() === 'NO' || answerThree.toUpperCase() === 'N' || answerThree.toUpperCase() === 'NOPE' || answerThree.toUpperCase() === 'NAH') {
  // This console.log will execute as long as one of all four conditions evaluates to 'True'//
  alert('You got it right! ');
  console.log('You got it right!');
  correctAnswer += 1;
} else {
  alert('Wrong!!! ');
  console.log('Wrong!');
}
//Question Four //
var answerFour = prompt('Q4. Kenny has bachelor\'s degree in Human Centered Design & Engineering  (y/n or yes/no)');
// Ask users question with input
if (answerFour.toUpperCase() === 'NO' || answerFour.toUpperCase() === 'N' || answerFour.toUpperCase() === 'NOPE' || answerFour.toUpperCase() === 'NAH') {
  // This console.log will execute as long as one of all four conditions evaluates to 'True'//
  alert('You got it right! ');
  console.log('You got it right!');
  correctAnswer += 1;
} else {
  alert('Wrong!!! ');
  console.log('Wrong!');
}
//Question Five //
var questionFive = prompt('Q5. Which are the organization that Kenny hasn\'t worked previously?  A. Microsoft  B.Best Buy  C. Seattle Seahawks  D. University of Washington');
// Ask users question with input to find out whether user's input is in an array
var answerFive = ['B','C'];
// Multiple answers in the array
if (answerFive.indexOf(questionFive.toUpperCase()) !== -1) {
  alert('You got it right! ');
  console.log('You got it right!');
  correctAnswer += 1;
} else {
  alert('Wrong!!! ');
  console.log('Wrong!');
}
//Question Six //
var answerSix = 3;
var userPick = prompt('Q6. Guess my number from 1 to 10');
var i = 0;
// Ask users question to guess number from 1 to 10, and tell users whether their answer is correct, too high, or too low w/ four times//
for (var i = 0; i < 4 ; i++) {
  if (answerSix == userPick) {
    console.log ('You got it right!');
    alert ('You got it right!');
    correctAnswer += 1;
    break;
  } else if (answerSix > userPick) {
    console.log ('Too low');
    userPick = parseInt(prompt('Guess my number from 1 to 10'));
  } else {
    console.log ('Too high');
    userPick = parseInt(prompt('Guess my number from 1 to 10'));
  }
}
//Question Seven //
var userAnswerAttempts = 0;
var answerSeven = ['KOREA', 'CALIFORNIA'];
// Ask user question to guess input inside of strings, and count how many times user attempts to answer //
do {
  userAnswerAttempts += 1;
  var userAnswerSeven = prompt('Q7. Can you guess where I was from?');
// Ask users question to guess input inside of strings, and tell users whether their answer is correct or not in six times//
  if (answerSeven.indexOf(userAnswerSeven.toUpperCase()) !== -1) {
    console.log ('Yes,I\'m from ' + userAnswerSeven.toUpperCase());
    alert ('You got it right! \nI\'m from ' + userAnswerSeven);
    correctAnswer += 1;
  } else {
    console.log ('I\'m not from ' + userAnswerSeven.toUpperCase() +'. Try again!');
    alert ('I\'m not from ' + userAnswerSeven +'. Try again!');
  }
} while (answerSeven.indexOf(userAnswerSeven.toUpperCase()) === -1 && userAnswerAttempts < 6)
console.log(UserName+ ' tried ' + userAnswerAttempts + ' time(s).');
//Display the score of the game//
console.log('You got ' + correctAnswer + ' out of 7 questions correctly.')
alert('Good job  '+ UserName + ', '+ '\nyou got ' + correctAnswer + ' out of 7 questions correctly.')
