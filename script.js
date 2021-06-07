"use strict";
/*
//selecting element in JS with class
console.log(document.querySelector(".message").textContent);
// it it was id then we need to use #

document.querySelector(".message").textContent = "❤ Correct Number !";
//it will chnage the text

document.querySelector(".question").textContent = 50;
document.querySelector(".score").textContent = 13;

//getting and seting value on the input element
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);*/

//Handling event click

//our code will react to something in the dom.
//we need to add event listener. An event is somehting happens on the page. suck as mouse click,mouse moving,keypress etc.
//we want to listen to the event to the check button

//Game logic-> entered number == secret number or entered number is too low than secret number or entered number is higher than secret number
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let prevHighscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

console.log(secret);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //if no value enter it will get 0 as a falue and it is a faulty value

  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "❌ No number !";
    displayMessage("❌ No number !");
  }
  //when player winds
  else if (guess === secret) {
    // document.querySelector(".message").textContent = "✅ Correct Number !";
    displayMessage("✅ Correct Number !");
    document.querySelector(".question").textContent = secret;
    document.querySelector(".header").style.backgroundColor = "#60b347";
    document.querySelector(".left").style.backgroundColor = "#60b347";
    document.querySelector(".right").style.backgroundColor = "#60b347";
    document.querySelector(".question").style.width = "200px";
    document.querySelector(".guess").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //we need to specify css property in camel case nitation in case there is two words . for e.g background-color will be backgroundColor
    //and the value always need to be string format
  }
  //when guess is wrong
  else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? "💹 Too High !" : "☢ Too Low !");
      // document.querySelector(".message").textContent =
      //   guess > secret ? "💹 Too High !" : "☢ Too Low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😥 You Lost the Game !");
      // document.querySelector(".message").textContent = "😥 You Lost the Game !";
      document.querySelector(".score").textContent = 0;
    }
  }

  //when guess is greater than secret number
  // else if (guess > secret) {
  //   //logic to decrese the score
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "💹 Too High !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😥 You Lost the Game !";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // //when guess is smaller than secret number
  // else if (guess < secret) {
  //   //logic to decrese the score
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "☢ Too Low !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😥 You Lost the Game !";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

//addEventListener we need to pass the type of event , here in our case is click
//also we want to tell the event listener what to do , i.e how to react to the event click.
//we do that by defining a fuction and that fnc will contain the code that will be executed when the click event happens on the check button and that fucntion is called event handler.
//JS will call the function when the vent will happen

document.querySelector(".btn").addEventListener("click", () => {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start Guessing...");
  // document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".header").style.backgroundColor = "#333";
  document.querySelector(".left").style.backgroundColor = "#333";
  document.querySelector(".right").style.backgroundColor = "#333";
  document.querySelector(".question").style.width = "100px";
  document.querySelector(".guess").style.backgroundColor = "#333";
  document.querySelector(".guess").value = "";
  document.querySelector(".question").textContent = "?";
});
