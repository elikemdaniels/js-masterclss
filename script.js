// PROMPT & ALERT FUNCTIONS

// let email = prompt;
// let age = prompt;
// let gender = prompt;

//CONDITIONAL FUNCTIONS
// let buttonClick = function () {
//   let email = prompt(`What's your email address?`);
//   let age = prompt(`How old are you?`);
//   let gender = prompt(`What's your gender?`);
//   alert(`Thank you. I see you are a ${gender}.`);
// };

// gender = "male";

// // DATA TYPE CHECKING
// console.log(typeof gender);

// ADDED TO CART FUNCTION
let bgChanger = document.getElementById('duda');
bgChanger.style.backgroundColor = '#0e262b';

let buttonChanger = document.getElementById('butta');
buttonChanger.style.backgroundColor = '#fafafa';
buttonChanger.innerText = 'Get Started';

let buttonFunction = function () {
  buttonChanger.innerHTML = 'Clicked';
};
