const questions = [
  {
    question: "wich is the larget animal in the world ?",
    answers: [
      { text: "Shark", Answer: false },
      { text: "Blue Whale", Answer: true },
      { text: "Elephant", Answer: false },
      { text: "Giraffe", Answer: false },
    ],
  },
  {
    question: "Question: Who invented the telephone?",
    answers: [
      { text: "Thomas Edison", Answer: false },
      { text: "Alexander Graham Bell", Answer: true },
      { text: "Nikola Tesla", Answer: false },
      { text: "Eli Whitney", Answer: false },
    ],
  },
  {
    question: "What is the capital city of Japan?",
    answers: [
      { text: "Tokyo", Answer: true },
      { text: "Seoul", Answer: false },
      { text: "Beijing", Answer: false },
      { text: "Bangkok", Answer: false },
    ],
  },
  {
    question: "What is the highest mountain in the world?",
    answers: [
      { text: "Mount Everest", Answer: true },
      { text: "Mount Kilimanjaro", Answer: false },
      { text: "Mount Fuji", Answer: false },
      { text: "Mount McKinley", Answer: false },
    ],
  },
];


const the_question = document.getElementById("question");
const the_answers = document.getElementById("answer_btns");
const next_btn = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let Score = 0;

function start_quiz() {
  currentQuestionIndex = 0;
  Score = 0;
  next_btn.innerHTML = "Next";
  ShowQuestions();
}

function ShowQuestions() {
  resetstate();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  the_question.innerHTML = `${questionNo}) ${currentQuestion.question} `;

  currentQuestion.answers.forEach((Answer) => {
    const button = document.createElement("button");
    button.innerHTML = Answer.text;
    button.classList.add("btn");
    the_answers.appendChild(button);

    if (Answer.Answer) {
      button.dataset.Answer = Answer.Answer;
    }
    button.addEventListener("click", select_answer);
  });
}

function resetstate() {
  next_btn.style.display = "none";
  while (the_answers.firstChild) {
    the_answers.removeChild(the_answers.firstChild);
  }
}

function select_answer(e) {
  const selectbtn = e.target;
  const istrue = selectbtn.dataset.Answer === "true";
  if (istrue) {
    selectbtn.classList.add("true");
    Score++;
  } else {
    selectbtn.classList.add("false");
  }
  Array.from(the_answers.children).forEach((btn) => {
    if (btn.dataset.Answer === "true") {
      btn.classList.add("true");
    }
    btn.disabled = true;
  });
  next_btn.style.display = "block";
}

function ShowScoor() {
  resetstate();
  the_question.innerHTML = `Your Scooooooor iiiiiis ${Score}/${questions.length} !!!`;
  next_btn.innerHTML = "Try Again ";
  next_btn.style.display = "block";
}

function handelNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    ShowQuestions();
  } else {
    ShowScoor();
  }
}

next_btn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handelNextBtn();
  } else {
    start_quiz();
  }
});

start_quiz();
