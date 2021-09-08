//functions to operate on numbers
function add (a, b) {
    parseInt(a);
    parseInt(b);
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b){
    return a / b;
};

//operate function
function operate (operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2)
    }
    if (operator == '-') {
        return subtract(num1, num2)
    }
    if (operator == '*') {
        return multiply(num1, num2)
    }
    if (operator == '/') {
        return divide(num1, num2)
    }
};

//getting the reference for the display so i can change it latter
const display = document.querySelector('#display');
const display2 = document.querySelector('#display2');
//getting the reference for all the NUMERIC buttons
const numButtons = document.querySelectorAll('.numButton');
console.log(numButtons)
//adding a function to do something each time a button is pressed, at the end it should store the numers pressed in a variable concatinating each other 
//and displaying each numer on the display of the calculator
// the if statments are there to make sure the whole number fits in the div, if its larger than that then it still store the number but wont show. maybe add some DOTS later
let clickedNumber;
let totalNumber = '';
let totalNumber2 ='';
numButtons.forEach((button) => {button.addEventListener('click', (event)=> {
    clickedNumber = event.target.innerHTML;
    totalNumber += clickedNumber;
    if (totalNumber.length > 26){
        display.style.fontSize = '19px';
    }
    if (totalNumber.length > 82){
        display.style.fontSize = '10px'
    }
    if(totalNumber.length > 120){
        display2.style.fontSize = '10px'
    }
    display.innerHTML = totalNumber;
    

})});

// now i have to get all the operator buttons, and then add functionality when they are pressed
//basically on button press i have to store the totalNumber variable on a new variable and reset totalNumber
// i also store the operador to use later when the equal sing is pressed
const operatorButtons = document.querySelectorAll('.operatorButton');
let operador;
operatorButtons.forEach((button) => {button.addEventListener('click', (event)=> {
    operador = event.target.innerHTML;
    display2.innerHTML = totalNumber;
    totalNumber2 = totalNumber;
    totalNumber = '';
    display.innerHTML = totalNumber;
})});

//get the ref to the  equal sing to do some basic math when its pressed
const equal = document.querySelector('.equalButton');
let result;
equal.addEventListener('click', () => {
    console.log(totalNumber);
    console.log(totalNumber2);
    console.log(operador);
    result = operate(operador, totalNumber2, totalNumber);
    console.log(result);
    totalNumber = result;
    display.innerHTML = result;
});