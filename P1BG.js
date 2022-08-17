const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreboard__score = document.getElementById('scoreNumber')
//const endgame_page = document.getElementById('endgame')


var score = 0
// score ++


let shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame,scoreNumber)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
setNextQuestion()
})


function startGame() {
  
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState( )

  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct 

    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  if(correct) {
    score ++
    scoreboard__score.textContent = score
    score.length=8


  }

  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  

  } else {
    console.log('GAME IS OVER!!!')
    

    startButton.innerText = 'The End'
    startButton.classList.remove('hide')
    startButton.addEventListener('click', function() {
        window.location = '/P1BG/end.html'
    })

  }

}






function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')

}










const questions = [ 
  
  
    {
      question: 'who held naruto hostage when he was born?',
      answers: [
        { text: 'Madara', correct: true },
        { text: 'He was not a hostage', correct: false },
        { text: 'Skura', correct: false }
        
    
      ]
    },
    {
      question: 'Whom did Kakashi get his eye from?',
      answers: [
        { text: 'obito', correct: true },
        { text: 'Naruto', correct: false},
        { text: 'itachi', correct: false },
        { text: 'bobby', correct: false }
      ]
    },
    {
      question: 'How many times did Naruto fail the graduation test? ',
      answers: [
        { text: 'once', correct: false },
        { text: 'three', correct: true },
        { text: 'four', correct: false },
        { text: 'zero', correct: false }
      ]
    },
    {
      question: 'Naruto is a container of which Tailed-Beast?',
      answers: [
        { text: 'six-tails', correct: true},
        { text: 'eight-tails', correct: false},
        { text: 'one-tails', correct: false }
      ]
    },
    {
      question: 'Naruto bestfriend?',
      answers: [
        { text: 'sasuke', correct: true},
        { text: 'Hinata', correct: false},
        { text: 'jiraiya', correct: false }
      ]
    },
    {
      question: 'Naruto color he wears?',
      answers: [
        { text: 'orange', correct: true},
        { text: 'pink', correct: false},
        { text: 'blue', correct: false }
      ]
    },
    {
      question: 'Naruto has so many friend in the first in S1?',
      answers: [
        { text: 'false', correct: true},
        { text: 'true', correct: false}
        
      ]
    },
    {
      question: 'Which Hokage sealed the nine-tailed fox inside Naruto?',
      answers: [
        { text: 'thrid Hokage', correct: false},
        { text: 'fourth Hokage', correct: true},
        {text: 'second Hokage', correct: false}
        
      ]

    },
    

  ]

  
  
   


   
   

  
  
  
    
  





