const quiz = [
  {
    question: "Из какого фильма Прекрасный принц?",
    answers: ["!Золушка", "Русалочка", "Спящая красавица", "Мулан"],
    rightAnswer: 0,
  },
  {
    question: "Какой герой мультфильма живет в ананасе под водой?",
    answers: ["Камбала", "Немо", "Рик и Морти", "!Губка Боб"],
    rightAnswer: 3,
  },
  {
    question: "Что является национальным животным Шотландии?",
    answers: ["Лошадь", "!Единорог", "Волк", "Корова"],
    rightAnswer: 1,
  },
  {
    question: "Какая страна производит больше всего кофе в мире?",
    answers: ["Колумбия", "Индонезия", "!Бразилия", "Вьетнам"],
    rightAnswer: 2,
  },
  {
    question: "Какой вкус у Куантро?",
    answers: ["Базилика", "Лимона", "Ванили", "!Апельсина"],
    rightAnswer: 3,
  },
  {
    question: "Какой безалкогольный напиток первым был взят в космос?",
    answers: ["Пепси", "Фанта", "!Кока-Кола", "Снапл"],
    rightAnswer: 2,
  },
  {
    question: "Сколько весит костюм Чубакки?",
    answers: ["!3.6 кг", "7.7 кг", "2.7 кг", "6.8 кг"],
    rightAnswer: 0,
  },
  {
    question: "Из чего сделан самый крепкий дом в “Трех поросятах”?",
    answers: ["!Кирпич", "Палочки", "Солома", "Бамбук"],
    rightAnswer: 0,
  },
  {
    question: "Сколько длится мгновение?",
    answers: ["60 секунд", "!90 секунд", "120 секунд", "180 секунд"],
    rightAnswer: 1,
  },
  {
    question: "Какая самая маленькая планета в нашей Солнечной системе?",
    answers: ["Земля", "Венера", "Марс", "!Меркурий"],
    rightAnswer: 3,
  },
];

let currentQuestion = -1,
  currentAnswers = [];

function showNextContent() {
  const nextContent = document.querySelector(".next_content"),
    firstContent = document.querySelector(".first_content"),
    nextQuestion = document.querySelector(".next_content_question"),
    nextAnswer = document.querySelectorAll(".next_content_answer");

  nextContent.style.display = "flex";
  firstContent.style.display = "none";
  currentQuestion += 1;
  let quizItem = quiz[currentQuestion];
  nextQuestion.innerHTML = quizItem.question;
  nextAnswer.forEach((item, i) => {
    item.innerHTML = quizItem.answers[i];
  });
}

function showEndContent() {
  const endContent = document.querySelector(".end_content"),
    nextContent = document.querySelector(".next_content");

  endContent.style.display = "flex";
  nextContent.style.display = "none";
}

function showFirstContent() {
  const endContent = document.querySelector(".end_content"),
    firstContent = document.querySelector(".first_content");

  endContent.style.display = "none";
  firstContent.style.display = "flex";
  currentQuestion = -1;
  currentAnswers = [];
}

function countResultQuiz() {
  const endTitel = document.querySelector(".end_content_titel"),
    endResult = document.querySelector(".end_content_result"),
    endContent = document.querySelector(".end_content");
  let resultQuiz = 0;
  for (let i = 0; i < currentAnswers.length; i++) {
    if (currentAnswers[i] == true) {
      resultQuiz += 1;
    }
  }
  endResult.innerHTML = `${resultQuiz} / ${quiz.length}`;
  if ((resultQuiz / quiz.length) * 100 >= 80) {
    endTitel.innerHTML = "Вы прошли!";
    endContent.style.background = "green";
  } else {
    endTitel.innerHTML = "Вы  не прошли!";
    endContent.style.background = "red";
  }
}

window.onload = function () {
  const firstButton = document.querySelector(".first_content_button"),
    nextButton = document.querySelector(".next_content_button"),
    nextAnswer = document.querySelectorAll(".next_content_answer"),
    endButton = document.querySelector(".end_content_button");

  firstButton.addEventListener("click", () => {
    showNextContent();
  });

  nextButton.addEventListener("click", () => {
    if (currentQuestion == quiz.length - 1) {
      showEndContent();
      countResultQuiz();
    } else {
      if (currentAnswers[currentQuestion] !== undefined) {
        showNextContent();
      }
    }
    console.log(currentAnswers);
  });

  endButton.addEventListener("click", () => {
    showFirstContent();
  });

  nextAnswer.forEach((ans, i) => {
    ans.addEventListener("click", () => {
      currentAnswers[currentQuestion] = i === quiz[currentQuestion].rightAnswer;
    });
  });
};
