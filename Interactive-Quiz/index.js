const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const buttonContainer = document.getElementById("button-container");
buttonContainer.style.display = "none";
questionContainer.style.display = "none";
let index = 0;
let score = 0;
let questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Machine Learning",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    result: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    result: "<a>",
  },
  {
    question: "What does the HTML <br> tag represent?",
    options: ["Bold text", "Line break", "Bullet list", "Paragraph"],
    result: "Line break",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    result: "Cascading Style Sheets",
  },
  {
    question: "How can you include external CSS in an HTML document?",
    options: ["<style>", "<css>", "<link>", "<script>"],
    result: "<link>",
  },
  {
    question: "What property is used to change the text color in CSS?",
    options: ["color", "text-color", "font-color", "text-style"],
    result: "color",
  },
  {
    question: "What is the purpose of the var keyword in JavaScript?",
    options: [
      "Declare a variable",
      "Define a function",
      "Create a loop",
      "Perform arithmetic operations",
    ],
    result: "Declare a variable",
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    options: ["// Comment", "/* Comment */", "# Comment", "-- Comment"],
    result: "// Comment",
  },
  {
    question: "What does the === operator do in JavaScript?",
    options: [
      "Assignment",
      "Comparison (equal value and equal type)",
      "Logical AND",
      "Concatenation",
    ],
    result: "Comparison (equal value and equal type)",
  },
  {
    question: "What is the purpose of the let keyword in JavaScript?",
    options: [
      "Declare a variable",
      "Define a function",
      "Create a loop",
      "Perform arithmetic operations",
    ],
    result: "Declare a variable",
  },
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none";
  questionContainer.style.display = "block";
  buttonContainer.style.display = "flex";
  document.body.style.backgroundColor = "cyan";
  displayQuestion(questions[index]);
  updateButtonVisibility();
}
function displayQuestion(questionObj) {
  questionContainer.innerHTML = "";

  // Creating question element
  const questionElement = document.createElement("h4");
  questionElement.textContent = questionObj.question;
  questionContainer.appendChild(questionElement);

  // creating option element
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");

  questionObj.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option-button");

    optionButton.addEventListener("click", () => {
      handleOptionClick(option, questionObj.result);
    });
    optionsContainer.appendChild(optionButton);
  });
  questionContainer.appendChild(optionsContainer);
}

function handleOptionClick(selectedOption, correctAnswer) {
  const optionButtons = document.querySelectorAll(".option-button");

  optionButtons.forEach((optionButton) => {
    optionButton.disabled = true; // Disable all buttons after one is clicked

    if (optionButton.textContent === selectedOption) {
      if (selectedOption === correctAnswer) {
        optionButton.classList.add("correct");
        score++;
      } else {
        optionButton.classList.add("wrong");

        // Find and highlight the correct answer
        optionButtons.forEach((correctOptionButton) => {
          if (correctOptionButton.textContent === correctAnswer) {
            correctOptionButton.classList.add("correct");
          }
        });
      }
    }
  });

  updateButtonVisibility();
}

function moveToNext() {
  if (index < questions.length - 1) {
    index++;
    displayQuestion(questions[index]);
  }
  updateButtonVisibility();
}
function moveToPrevious() {
  if (index > 0) {
    index--;
    displayQuestion(questions[index]);
  }
  updateButtonVisibility();
}
function submitQuiz() {
  if (index == questions.length - 1) {
    endQuiz();
  }
  console.log(index);
}

function updateButtonVisibility() {
  backButton.style.display = index === 0 ? "none" : "block";
  nextButton.style.display = index === questions.length - 1 ? "none" : "block";
  submitButton.style.display =
    index === questions.length - 1 ? "block" : "none";
}

function updateElementVisibility(element, isVisible) {
  element.style.display = isVisible ? "block" : "none";
}
function updateButtonVisibility() {
  updateElementVisibility(backButton, index !== 0);
  updateElementVisibility(nextButton, index !== questions.length - 1);
  updateElementVisibility(submitButton, index === questions.length - 1);
}
function endQuiz() {
  // Hide the question container
  updateElementVisibility(buttonContainer, false);

  // Hide the navigation buttons
  backButton.style.display = "none";
  nextButton.style.display = "none";
  submitButton.style.display = "none";

  // Display the user's score with a smooth fade-in animation
  questionContainer.innerHTML = "";
  const scoreElement = document.createElement("p");
  scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
  scoreElement.classList.add("score-message");
  questionContainer.appendChild(scoreElement);

  // Display a congratulations message with a fade-in animation
  const congratsElement = document.createElement("p");
  congratsElement.textContent = `Congratulations!`;
  congratsElement.classList.add("congrats-message");
  questionContainer.appendChild(congratsElement);
}
