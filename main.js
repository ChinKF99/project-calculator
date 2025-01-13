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
let finalResult = 0
let decimalValue = ""
let equal = ""
let repeatEqual = ""

const numbers = document.querySelectorAll("#numbers")

const operators = document.querySelectorAll("#operator")

const screen = document.querySelector("#screen")

const operations = document.querySelector("#operations")

const longScreen = document.querySelector("#longScreen")

const clear = document.querySelector("#clear")

const decimal = document.querySelector("#decimal")


//Event listener to carry out a function if numbers is click 
numbers.forEach((number) => number.addEventListener("click",(e)=>{
    handleNumber(e.target.value)
    screen.value = currentValue
    repeatEqual = ""
}))

//Event listener to carry out a function if operator is click 
operators.forEach((operator) => operator.addEventListener("click", (e)=>{
    // If there is an existing equation such as "4-5" and the operators is click on again, it will continue the equation if a new number is type in
    if(!finalResult && longScreen.value && screen.value && equal == ""){
        finalResult = operation(array[0],array[1],currentValue)
        longScreen.value = finalResult + e.target.value
        screen.value = finalResult
        previousValue = 1
        array[0] = finalResult
        array[1] = e.target.value
        equal = ""
        repeatEqual = "" 
    }

    else if(finalResult && longScreen.value && screen.value && equal == ""){
        finalResult = operation(array[0],array[1],currentValue)
        longScreen.value = finalResult + e.target.value
        screen.value = finalResult
        previousValue = 1
        array[0] = finalResult
        array[1] = e.target.value
        equal = ""
        repeatEqual = ""
    }

    else if (equal == "=" || !finalResult){handleOps(e.target.value)
    array.push(currentValue)
    //Display the current full equation
    longScreen.value = array[0] + currentValue
    //check for the array value to ensure all is in order
    repeatEqual = ""
    console.log(array)}
}))

//Event listener to carry out a function if "=" is click 
operations.addEventListener("click",()=>{
    // check if there is a finalResult, and if "=" is press again, use the recent finalResult and carry out the equation again
    if(repeatEqual = "yes"){
        longScreen.value = array[0] + array[1] + currentValue + "="
        finalResult = operation(array[0],array[1],currentValue)
        screen.value=finalResult
        array[0] = finalResult
        finalResult = ""
        equal = "="
    }
    
    else{
        finalResult = operation(array[0],array[1],currentValue)
        longScreen.value = array[0] + array[1] + currentValue + "="
        screen.value = finalResult
        array[0] = finalResult
        finalResult = ""
        equal = "="
        repeatEqual = "yes"
    }
})

clear.addEventListener("click",()=>{
    array = []
    ops = ""
    previousValue = ""
    currentValue = ""
    finalResult = ""
    equal = ""
    screen.value = ""
    longScreen.value = ""
})

decimal.addEventListener("click",()=>{
   currentValue = currentValue+"."
   screen.value = currentValue
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
        array[1] = currentValue
        screen.value = ""
    }
    else{previousValue = currentValue
    array.push(previousValue)
    currentValue = ops
    screen.value =""}
}


