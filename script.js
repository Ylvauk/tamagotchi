// Constant values
const BOREDOM_INCREMENT = 3000;
const TIREDNESS_INCREMENT = 4000;
const AGE_INCREMENT = 5000;
const HUNGER_INCREMENT = 6000;

const MAX_AGE = 100;
const MAX_HUNGER = 25;
const MAX_TIREDNESS = 20;
const MAX_BOREDOM = 50;
// State Variables
let age;
let hunger;
let tiredness;
let boredom;

//Cached element references
const play = document.querySelector("#startButton");
const welcomeMessageContainer = document.querySelector("#welcome-message-container"
);
const mainGameContainer = document.querySelector("#main-game-container");
const ageTracker = document.querySelector("#age-tracker");
const hungerTracker = document.querySelector("#hunger-tracker");
const boredomTracker = document.querySelector("#boredom-tracker");
const tirednessTracker = document.querySelector("#tiredness-tracker");
const feedButton = document.querySelector("#feed-button");
const playButton = document.querySelector("#play-button");
const sleepButton = document.querySelector("#sleep-button");

// Functions
const resetStateVariables = function () {
  age = 0;
  hunger = 0;
  boredom = 0;
  tiredness = 0;
};

const handleFeedClick = function () {
    if (hunger > 0){
        hunger--
        hungerTracker.innerText = hunger
    }
}
const handleSleepClick = function () {
    if (tiredness > 0){
        tiredness--
        tirednessTracker.innerText = tiredness
    }
}
const handlePlayClick = function () {
    if (boredom > 0){
        boredom--
        boredomTracker.innerText = boredom
    }
}

const setGameView = function () {
  console.log("in init");
  welcomeMessageContainer.classList.add("hide");
  mainGameContainer.classList.remove("hide");
  tirednessTracker.innerText = tiredness
  ageTracker.innerText = age
  hungerTracker.innerText = hunger
  boredomTracker.innerText = boredom
};

const setGameOverView = function () {
  console.log("in init");
  welcomeMessageContainer.classList.remove("hide");
  mainGameContainer.classList.add("hide");
};

const startIntervals = function () {
  const ageInterval = setInterval(() => {
    age++;
    console.log(age);
    if (age > MAX_AGE) {
      endGame();
    }
    ageTracker.innerText = age;
  }, AGE_INCREMENT);

  const hungerInterval = setInterval(() => {
    hunger++;
    console.log(hunger);
    if (hunger > MAX_HUNGER) {
      endGame();
    }
    hungerTracker.innerText = hunger;
  }, HUNGER_INCREMENT);

  const tirednessInterval = setInterval(() => {
    tiredness++;
    console.log(tiredness);
    if (tiredness > MAX_TIREDNESS) {
      endGame();
    }
    tirednessTracker.innerText = tiredness;
  }, TIREDNESS_INCREMENT);

  const boredomInterval = setInterval(() => {
    boredom++;
    console.log(boredom);
    if (boredom > MAX_BOREDOM) {
      endGame();
    }
    boredomTracker.innerText = boredom;
  }, BOREDOM_INCREMENT);

  function endGame() {
    clearInterval(ageInterval);
    clearInterval(hungerInterval);
    clearInterval(boredomInterval);
    clearInterval(tirednessInterval);
    setGameOverView();
  }
};
const init = function () {
    resetStateVariables();
    setGameView();
    startIntervals();
};
// Methods

// Attach event listeners
play.addEventListener("click", init);
feedButton.addEventListener("click", handleFeedClick);
sleepButton.addEventListener("click", handleSleepClick);
playButton.addEventListener("click", handlePlayClick);