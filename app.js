// var answerOne = prompt('Kenny\'s currently working at Xbox Team (y/n or yes/no)');
//
// if (answerOne.toUpperCase() === 'NO' || answerOne.toUpperCase() === 'N' || answerOne.toUpperCase() === 'NOPE' || answerOne.toUpperCase() === 'NAH') {
//   // This console.log will execute as long as one of all four conditions evaluates to 'True'//
//   alert('You got it right! ');
//   console.log('You got it right!');
// } else {
//   alert('Wrong!!! ');
//   console.log('Wrong!');
// }
//
// var answerTwo = prompt('Kenny grauated from Harvard Law School (y/n or yes/no)');
//
// if (answerTwo.toUpperCase() === 'NO' || answerTwo.toUpperCase() === 'N' || answerTwo.toUpperCase() === 'NOPE' || answerTwo.toUpperCase() === 'NAH') {
//   // This console.log will execute as long as one of all four conditions evaluates to 'True'//
//   alert('You got it right! ');
//   console.log('You got it right!');
// } else {
//   alert('Wrong!!! ');
//   console.log('Wrong!');
// }
//
// var answerThree = prompt('Kenny recently graduated from college (y/n or yes/no)');
//
// if (answerThree.toUpperCase() === 'NO' || answerThree.toUpperCase() === 'N' || answerThree.toUpperCase() === 'NOPE' || answerThree.toUpperCase() === 'NAH') {
//   // This console.log will execute as long as one of all four conditions evaluates to 'True'//
//   alert('You got it right! ');
//   console.log('You got it right!');
// } else {
//   alert('Wrong!!! ');
//   console.log('Wrong!');
// }
//
// var answerFour = prompt('Kenny has bachelor\'s degree in Human Centered Design & Engineering  (y/n or yes/no)');
//
// if (answerFour.toUpperCase() === 'NO' || answerFour.toUpperCase() === 'N' || answerFour.toUpperCase() === 'NOPE' || answerFour.toUpperCase() === 'NAH') {
//   // This console.log will execute as long as one of all four conditions evaluates to 'True'//
//   alert('You got it right! ');
//   console.log('You got it right!');
// } else {
//   alert('Wrong!!! ');
//   console.log('Wrong!');
// }
//
// var questionFive = prompt('Which are the organization that Kenny hasn\'t worked previously?  A. Microsoft  B.Best Buy  C. Seattle Seahawks  D. University of Washington');
// var answerFive = ['B','C'];
//
// if (answerFive.indexOf(questionFive.toUpperCase()) !== -1) {
//   alert('You got it right! ');
//   console.log('You got it right!');
// } else {
//   alert('Wrong!!! ');
//   console.log('Wrong!');
// }
//
// var answerSix = 3;
// var userPick = prompt('Guess my number from 1 to 10');
// var i = 0;
//
// for (var i = 0; i < 4 ; i++) {
//   if (answerSix == userPick) {
//     console.log ('You are right!');
//   } else if (answerSix > userPick) {
//     console.log ('Too low');
//     userPick = parseInt(prompt('Guess my number from 1 to 10'));
//   } else {
//     console.log ('Too high');
//     userPick = parseInt(prompt('Guess my number from 1 to 10'));
//   }
// }

var answerSeven = ['KOREA', 'CALIFORNIA'];
var questionSeven = prompt('Can you guess where I was from?');
var j = 0;

for (var j = 0; j < 6 ; j++) {
  if (answerSeven.indexOf(questionSeven.toUpperCase()) !== -1) {
    console.log ('Yes,I\'m from ' + questionSeven + '!');
  } else {
    console.log ('I\'m not from ' + questionSeven + '. Try again!');
    questionSeven = parseInt(prompt('Can you guess where I was from?'));
  }
}
