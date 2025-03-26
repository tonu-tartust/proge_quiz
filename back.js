const question = { equation: "2 + 4", correctAnswer: 6 };
const choices = [3, 6, 8, 4, 7, 56, 1, 14, 23];

document.getElementById("question").innerText = question.equation;

const answersContainer = document.getElementById("answers");

choices.forEach(choice => {
    const btn = document.createElement("div");
    btn.classList.add("answer");
    btn.innerText = choice;
    btn.onclick = () => {
        if (choice === question.correctAnswer) {
            btn.classList.add("correct");
            alert("Correct!");
        } else {
            btn.classList.add("wrong");
            alert("Wrong! Try again.");
        }
    };
    answersContainer.appendChild(btn);
});