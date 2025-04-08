function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operations = ["+", "-", "*"];
  const operation = operations[getRandomNumber(0, operations.length - 1)];

  let correctAnswer;
  if (operation === "+") correctAnswer = num1 + num2;
  if (operation === "-") correctAnswer = num1 - num2;
  if (operation === "*") correctAnswer = num1 * num2;

  return {
      equation: `${num1} ${operation} ${num2}`,
      correctAnswer: correctAnswer
  };
}

function generateAnswers(correctAnswer) {
  let answers = new Set();
  answers.add(correctAnswer);

  while (answers.size < 6) {
      answers.add(getRandomNumber(correctAnswer - 5, correctAnswer + 5));
  }

  return Array.from(answers).sort(() => Math.random() - 0.5);
}

function loadNewQuestion() {
  const questionData = generateQuestion();
  document.getElementById("question").innerText = questionData.equation;

  const answerChoices = generateAnswers(questionData.correctAnswer);
  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";

  answerChoices.forEach(choice => {
      const btn = document.createElement("div");
      btn.classList.add("answer");
      btn.innerText = choice;
      btn.onclick = () => {
          if (choice === questionData.correctAnswer) {
              btn.classList.add("correct");
              setTimeout(loadNewQuestion, 1000);
          } else {
              btn.classList.add("wrong");
              setTimeout(() => btn.classList.remove("wrong"), 500);
          }
      };
      answersContainer.appendChild(btn);
  });
}

loadNewQuestion();