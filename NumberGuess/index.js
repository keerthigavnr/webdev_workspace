// console.log(`hello console`);
// console.log(`I like pizza`);
// window.alert(`This is and alert`);
// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = "This is a paragraph";
// let name = "Keerthi";
// // document.getElementById("myH1").textContent = `Hello ${name}`;
// let username;
// // username = window.prompt("What's your username?");
// // document.getElementById("myH1").textContent = `Hello ${username}`;
// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// };

// let radius;
// const PI = 3.14;
// document.getElementById("mySubmit").onclick = function () {
//   radius = document.getElementById("myText").value;
//   let area = PI * Number(radius) * Number(radius);
//   document.getElementById(
//     "myP"
//   ).textContent = `The area of circle is ${area} cm`;
// };
// const countLabel = document.getElementById("myLabel");
// // Counter program
// let count = 0;

// document.getElementById("Increasebtn").onclick = function () {
//   count++;
//   document.getElementById("myLabel").textContent = count;
// };
// document.getElementById("Resetbtn").onclick = function () {
//   count = 0;
//   document.getElementById("myLabel").textContent = count;
// };
// document.getElementById("Decreasebtn").onclick = function () {
//   count--;
//   document.getElementById("myLabel").textContent = count;
// };

//Guess the number

let guess;
let guessNum;
let count = 0;
document.getElementById("attempt").textContent = "Attempt=0";
const target = Math.floor(Math.random() * 100) + 1;
document.getElementById("submitbtn").onclick = function () {
  count++;
  guess = document.getElementById("inputNum").value;
  guessNum = Number(guess);
  console.log(guessNum);

  if (guessNum > 0 && guessNum <= 100) {
    if (guessNum == target) {
      document.getElementById("attempt").textContent = `Attempt=${count}`;
      document.getElementById(
        "result"
      ).textContent = `Congratulations! You have guessed the number ${target}`;
    } else if (guessNum > target) {
      document.getElementById("attempt").textContent = `Attempt=${count}`;
      document.getElementById("result").textContent = `Enter a smaller number!`;
    } else if (guessNum < target) {
      document.getElementById("attempt").textContent = `Attempt=${count}`;
      document.getElementById("result").textContent = `Enter a larger number!`;
    }
  } else {
    alert("Enter number between 1 to 100");
  }
};
