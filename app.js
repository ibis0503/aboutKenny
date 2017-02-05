// Create function guessingGame //
function guessingGame() {
  // Count correctAnswer for totalScore later //
  var correctAnswer = 0;
  // Declare userName as global variable //
  var userName;
  // Create function user name //
  function name (){
    //Ask User's Name//
    userName = prompt ('What is your name?');
    alert ('Welcome ' + userName + '!');
    console.log('Welcome ' + userName);
  };
  name();

  // Create function from question 1 to 5 //
  function questionOnetoFive() {
    var answers1 = ['NO','NO','NO','NO','YES'];
    var answers2 = ['N','N','N','N','Y'];
    var questions = ['Q1. Kenny\'s currently working at Xbox Team (y/n or yes/no)', 'Q2. Kenny grauated from Harvard Law School (y/n or yes/no)', 'Q3. Kenny recently graduated from college (y/n or yes/no)', 'Q4. Kenny has bachelor\'s degree in Human Centered Design & Engineering  (y/n or yes/no)','Q5. My favorite color is white (y/n or yes/no)'];

    for (var i = 0; i < questions.length; i++) {
      var userAnswer = prompt(questions[i]);
      if (userAnswer.toUpperCase() === answers1[i] || userAnswer.toUpperCase() === answers2[i]) {
        console.log('You got it right!');
        alert('You got it right!');
        correctAnswer += 1;
      } else {
        console.log('Wrong');
        alert('Wrong');
      }
    }
  }
  questionOnetoFive();

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
        alert ('You got it right! \nI\'m from ' + answerSeven[0] + ', ' + answerSeven[1]);
        correctAnswer += 1;
      } else {
        console.log ('I\'m not from ' + userAnswerSeven.toUpperCase() +'. Try again!');
        alert ('I\'m not from ' + userAnswerSeven +'. Try again!');
      }
      // until user pick right answer or in six times //
    } while (answerSeven.indexOf(userAnswerSeven.toUpperCase()) === -1 && userAnswerAttempts < 6)
    console.log(userName + ' tried ' + userAnswerAttempts + ' time(s).');
  };
  questionSeven();

  // Create function totalScore //
  function totalScore(){
    //Display the score of the game//
    console.log('You got ' + correctAnswer + ' out of 7 questions correctly.')
    alert('Good job  '+ userName + ', '+ '\nyou got ' + correctAnswer + ' out of 7 questions correctly.')
  };
  totalScore();

  // Close guessingGame function //
};
