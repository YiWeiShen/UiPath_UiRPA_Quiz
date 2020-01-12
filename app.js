'use strict';
/**
 * Example store structure
 */

const store = {
  // 5 or more questions are
  questions: [
    {
      question: 'How is a function invoked in JavaScript?',
      answers: [
        'call ThinkfulFn();',
        'call function ThinkfulFn();',
        'ThinkfulFn();',
        'function ThinfulFn();'
      ],
      correctAnswer: 3
    },
    {
      question: 'How to write (If “i” is NOT equal to 8) code?',
      answers: [
        'if(i ! 8)',
        'if i<8',
        'if(i!=8)',
        'if i!=8'
      ],
      correctAnswer: 3
    },
    {
      question: 'What does CSS stand for?',
      answers: [
        'Colorful Style Sheets',
        'Cascading Style Sheets',
        'Computer System Sheets',
        'Cooperation Style System'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which function of an Array object calls a function for each element in the array?',
      answers: [
        'map()',
        'function()',
        'forEveryItem()',
        'if()'
      ],
      correctAnswer: 1
    },
    {
      question: 'Choose the correct HTML element for the largest heading:',
      answers: [
        'head',
        'heading',
        'h1',
        'ul'
      ],
      correctAnswer: 3
    }
  ],
  quizStart:false,
  questionNumber: 0,
  score: 0,
  answerCheck: undefined
};

// ****TEMPLATE FUNCTIONS****

function generateStartPage() {
  return `
  <form class="startPage">
  <img src="images\\light.png"><p class="light">The quiz contains 5 questions and  no time limit. </p></br>
  <img src="images\\light.png"><p class="light">Let's see how much you know, or don't know, about Javascript, CSS and HTML.</p></br>
  <p id="start">Good Luck !</p>
  <button type='submit' class='start-button'>Start Quiz</button> 
  
  </form>
  `;
}

function generateCurrentQuestion() {
  return `
    <form class='current-question-choices'>
    <p class="quesline">Question <span class='question-number'>${store.questionNumber}</span> of 5</p>
    <p class='current-question-text'>${store.questions[store.questionNumber-1].question}</p>
    <ul style='list-style-type: none;'>
      <li><label for ='a' class='choice-a'>A.<input type='radio' name='choice' value= 1 id = 'a' tabindex='0' required>${store.questions[store.questionNumber-1].answers[0]}</label></li>
      <li><label for ='b' class='choice-b'>B.<input type='radio' name='choice' value= 2 id = 'b'>${store.questions[store.questionNumber-1].answers[1]}</label></li>
      <li><label for ='c' class='choice-c'>C.<input type='radio' name='choice' value= 3 id = 'c'>${store.questions[store.questionNumber-1].answers[2]}</label></li>
      <li><label for ='d' class='choice-d'>D.<input type='radio' name='choice' value= 4 id = 'd'>${store.questions[store.questionNumber-1].answers[3]}</label></li>
    </ul>
    <button type='submit' id='check-answer'>Check Answer</button>
    <button type="submit" class='restart-button'>Restart</button> 
    <p class="tellscore">Current Score: <span class='current-correct'>${store.score}</span> of ${store.questionNumber}</p>
    </form>
  `;
}

function generateCorrectPage() {
  return `
  <form class='correct-answer-form'>
  <h2>Correct Answer!</h2>
  <p class="correct">Correct Answer: ${store.questions[store.questionNumber-1].answers[store.questions[store.questionNumber-1].correctAnswer - 1]}</p>
  <button type='button' class='next-question'>Next Question</button>
  <p class="tellscore">Current Score: <span class='current-correct'>${store.score}</span> of ${store.questionNumber}</p>
  </form>
  `;
}

function generateWrongPage() {
  return `
  <form class='wrong-answer-form'>
  <h2>Wrong Answer!</h2>
  <p class="correct">Correct Answer: ${store.questions[store.questionNumber-1].answers[store.questions[store.questionNumber-1].correctAnswer - 1]}</p>
  <button type='button' class='next-question'>Next Question</button>
  <p class="tellscore">Current Score: <span class='current-correct'>${store.score}</span> of ${store.questionNumber}</p>
  </form>
  `;
}

function generateQuizComplete() {
  return `
  <form class = "result">
  <label for="check result">Completed the Quiz</label>
  <p id="start">High Five!<img src="images\\high-five.png"></p>
  <p class="quesline">You got <span class ="current-correct">${store.score}</span> out of 5!</p>
  <button type="submit" class='restart-button'>Restart</button>
</form>`;
}

// **** RENDER FUNCTION ****

function render() {
  if (store.questionNumber === 0) {
    $('main').html(generateStartPage());
  } else if (store.questionNumber > 0 && store.questionNumber <=5) {
    if (store.answerCheck === true) {
      $('main').html(generateCorrectPage());
    } else if (store.answerCheck === false) {
      $('main').html(generateWrongPage());
    } else {
      $('main').html(generateCurrentQuestion());
    }
  } else {
    $('main').html(generateQuizComplete());
  }
  handleStartQuiz();
  handleCheckAnswer();
  handleRestartQuiz();
  handleNextQuestion();
}

// **** HANDLE FUNCTIONS ****

function handleStartQuiz() {
  // The starting screen should have a button that users can click to start the quiz.
  $('.start-button').on('click', function(e){
    e.preventDefault();
    store.questionNumber = 1;
    render();
  });
}

function handleCheckAnswer(){
  $('.current-question-choices').on('submit', function(e){
    e.preventDefault();
    let selectAnswer = parseInt($('input[type = "radio"]:checked').attr('value'));
    if (selectAnswer === store.questions[store.questionNumber-1].correctAnswer){
      store.score ++;
      store.answerCheck = true;
    }else{
      store.answerCheck = false;
    }
    render();
  });
}

function handleNextQuestion() {
  $('.next-question').on('click', function() {
    store.answerCheck = undefined;
    store.questionNumber++;
    render();
  });
}

function handleRestartQuiz() {
  // Users should be able to start a new quiz
   $('.restart-button').on('click', function() {
    store.questionNumber = 0;
    store.score = 0;
    render();
   });
}

function main() {
  render();
  handleStartQuiz();
}

$(main);

/*
CHECKLIST:
-Use mobile responsive design
 */