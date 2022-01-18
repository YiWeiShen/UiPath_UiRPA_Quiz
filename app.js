'use strict';
/**
 * Example store structure
 */

const store = {
  questions: [
    // Introduction to RPA and Automation
    {
      question: 'With StudioX you can automate...',
      answers: [
        'Moving values from one Excel sheet to another or from Excel to a web application. OR, Downloading a report and sending it via email to predefined users.',
        'End to end invoice processing through multiple platforms.',
        'A chatbot that sends weekly work related reminders.'
      ],
      correctAnswer: 1
    },
    {
      question: 'There’s a lot of talk about what the future of work will entail. Besides the technological approach, a learning strategy for the employees must be put in place when getting started with RPA.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 2
    },
    {
      question: 'RPA will not work in creative industries.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 1
    },
    {
      question: 'Processing invoices - retrieving data from the invoices and storing the values in  a database can be performed using…',
      answers: [
        'AI',
        'RPA',
        'AI + RPA'
      ],
      correctAnswer: 3
    },
    {
      question: 'What does RPA stand for?',
      answers: [
        'Robotic Processing Automation',
        'Robotic Process Analysis',
        'Robotic Process Automation'
      ],
      correctAnswer: 3
    },
    {
      question: 'Only low-skill jobs will be impacted by automation.',
      answers: [
        'False',
        'True'
      ],
      correctAnswer: 1
    }
    // questions template
    //
    // {
    //   question: '',
    //   answers: [
    //     '',
    //     '',
    //     '',
    //     ''
    //   ],
    //   correctAnswer: 
    // },

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
  <img src="images\\light.png"><p class="light">The quiz contains some questions and no time limit. </p></br>
  <img src="images\\light.png"><p class="light">Let's see how much you know, or don't know, about UiPath.</p></br>
  <p id="start">Good Luck !</p>
  <button type='submit' class='start-button'>Start Quiz</button> 
  
  </form>
  `;
}

function generateCurrentQuestion() {
  return `
    <form class='current-question-choices'>
    <p class="quesline">Question <span class='question-number'>${store.questionNumber}</span> of ${store.questions.length}</p>
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
  <p class="quesline">You got <span class ="current-correct">${store.score}</span> out of ${store.questions.length}!</p>
  <button type="submit" class='restart-button'>Restart</button>
</form>`;
}

// **** RENDER FUNCTION ****

function render() {
  if (store.questionNumber === 0) {
    $('main').html(generateStartPage());
  } else if (store.questionNumber > 0 && store.questionNumber <= store.questions.length) {
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