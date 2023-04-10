//Quiz Data object

const quizData = [
    {
      question: 'Which Twitter user is the Twitter boss, now?',
      a: 'Elon Musk',
      b: 'Donald Trump',
      c: 'Vladimir Putin',
      d: 'Jack Ma',
      e: 'Cristiano Ronaldo',
      correct: 'a',
    },
    {
      question: 'Which twitter user is the former president of the USA?',
      a: 'Elon Musk',
      b: 'Donald Trump',
      c: 'Vladimir Putin',
      d: 'Jack Ma',
      e: 'Cristiano Ronaldo',
      correct: 'b',
    },
    {
      question: 'Which twitter user is known as a former KGB agent?',
      a: 'Donald Trump',
      b: 'Elon Musk',
      c: 'Jack Ma',
      d: 'Vladimir Putin',
      e: 'Cristiano Ronaldo',
      correct: 'd',
    },
    {
      question: 'Which twitter user is a footballer?',
      a: 'Donald Trump',
      b: 'Elon Musk',
      c: 'Cristiano Ronaldo',
      d: 'Vladimir Putin',
      e: 'Jack Ma',
      correct: 'c',
    },
    {
      question: 'Which twitter user is the founder of AliBaba?',
      a: 'Donald Trump',
      b: 'Elon Musk',
      c: 'Cristiano Ronaldo',
      d: 'Vladimir Putin',
      e: 'Jack Ma',
      correct: 'e',
    },
]

//DOM elements declarations

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

//variables declarations

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz] //ordered array of quiz questions
  
    deselectAnswers() // clear off radio button selections before next question
  
    questionEl.innerText = currentQuizData.question // loading question
    a_text.innerText = currentQuizData.a //loading answer A
    b_text.innerText = currentQuizData.b //loading answer B
    c_text.innerText = currentQuizData.c //loading answer C
    d_text.innerText = currentQuizData.d //loading answer D
    e_text.innerText = currentQuizData.e //loading answer E
}

loadQuiz();