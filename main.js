function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function operation(numA,op,numB){
    // Convert numA & numB to integer
    x = Number(numA)
    y = Number(numB)
    switch (op){
        case "+":
            return add(x,y);
            break;
        case "-":
            return subtract(x,y);
            break;
        case "*":
            return multiply(x,y);
            break;
        case "/":
            return divide(x,y);
            break;
    }
}

let array = []
let ops = ""
let previousValue = ""
let currentValue = ""
let finalResult = ""

const numbers = document.querySelectorAll("#numbers")

const operators = document.querySelectorAll("#operator")

const screen = document.querySelector("#screen")

const operations = document.querySelector("#operations")

const longScreen = document.querySelector("#longScreen")

const clear = document.querySelector("#clear")


//Event listener to carry out a function if numbers is click 
numbers.forEach((number) => number.addEventListener("click",(e)=>{
    handleNumber(e.target.value)
    screen.value = currentValue
}))

//Event listener to carry out a function if operator is click 
operators.forEach((operator) => operator.addEventListener("click", (e)=>{
    handleOps(e.target.value)
    array.push(currentValue)
    //Display the previous Number until a new number is click on
    screen.value = previousValue
    //Display the current full equation
    longScreen.value = previousValue + currentValue
    //check for the array value to ensure all is in order
    console.log(array)
}))

//Event listener to carry out a function if "=" is click 
operations.addEventListener("click",()=>{
    // Display the full equation
    longScreen.value = array.join("") + currentValue
    finalResult = operation(array[0],array[1],currentValue)
    //Display result at the screen
    screen.value = finalResult
})

clear.addEventListener("click",()=>{
    array = []
    ops = ""
    previousValue = ""
    currentValue = ""
    finalResult = ""
    screen.value = ""
    longScreen.value = ""
})

function handleNumber(num){
    // Reset currentValue to "" so it can accomodate up to 5 numbers
    if(previousValue){
        previousValue = ""
        currentValue = ""
    }
    if (currentValue.length <=5){
    currentValue += num
}}


function handleOps(ops){
    // Check if there is an existing operator, if so replace it in array and longScreen as well
    if(array.length > 1){
        currentValue = ops
        array.pop()
    }
    else{previousValue = currentValue
    array.push(previousValue)
    currentValue = ops}
}

