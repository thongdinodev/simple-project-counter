//1. create a variable to count;

//2. Display number, INCREASE, DECREASE, RESET button

//3. add events click to buttons to INCREASE, DECREASE OR RESET value of count
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");


let count = 0;

function displayNumber () {
    document.querySelector("h1").innerHTML = count;
};

displayNumber();
const plus = function () {
    count++;
    displayNumber();
};

const abstract = function () {
    count--;
    displayNumber();
};

const resetNum = function () {
    count = 0;
    displayNumber();
}

increaseButton.addEventListener("click", plus);
decreaseButton.addEventListener("click", abstract);
resetButton.addEventListener("click", resetNum);


