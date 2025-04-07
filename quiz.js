function RandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1 )) + min;
}



function generateQuestion(){

  const num1 = RandomNumber (1, 10)
  const num2 = RandomNumber (1, 10)

  const operators = ['-','+','*']

  const randomIndex = RandomNumber(0, operators.length - 1)
  const operator = operators[randomIndex]

  let correctAnswer;

  if (operator === '+'){
    correctAnswer = num1 + num2;
    } else if (operator === '-') {
     correctAnswer = num1 - num2;
    } else if (operator === '*'){
    correctAnswer = num1 * num2;
  }

  document.getElementById('question').innerText = `${num1} ${operator} ${num2}`;

  return correctAnswer
}

correctAnswer = generateQuestio()

function generateChoices(){
  
  let answers = [correctAnswer];

   while (answers.length < 4) {
    let wrongAnswer = RandomNumber(correctAnswer - 5, correctAnswer + 5);
   if(!answers.includes(wrongAnswer));
    answers.push(wrongAnswer);
  }

  answers.sort(  () => Math.random() - 0.5);

  const buttons = document.querySelectorAll('.choices')

  buttons.forEach((button, index) => {
    button.innerText = answers[index];
    button.onclick =  () => checkAnswer(answers[index], correctAnswer);

  });
}





console.log(generateQuestion())
console.log(generateChoices())

//document.getElementById('choices').innerText = correctAnswer;