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
let valueForRepeteadEqual = ""
let currentValue = ""
let finalResult = ""
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

operators.forEach((operator) => operator.addEventListener("click", (e)=>{

    // The first time an operator is pressed on
    if (currentValue && !longScreen.value){
        handleOps(e.target.value)
        //Display the current full equation
        longScreen.value = array[0] + array[1]
        //check for the array value to ensure all is in order
        repeatEqual = ""
    }

    // Change the operators in the end if there is a number infront
    else if (!currentValue && array.length == 2){
        handleOps(e.target.value)
        //Display the current full equation
        longScreen.value = array[0] + array[1]
        //check for the array value to ensure all is in order
        repeatEqual = ""
        console.log(array)
    }

    // If there is an existing equation such as "4-5" and the operators is click on again, it will continue the equation if a new number is type in
    else if(array.length ==2 && currentValue){
        finalResult = operation(array[0],array[1],currentValue)
        screen.value = finalResult
        array[0] = finalResult
        handleOps(e.target.value)
        longScreen.value = finalResult + array[1]
        equal = ""
        repeatEqual = "" 
    }


}))

//Event listener to carry out a function if "=" is click 
operations.addEventListener("click",()=>{
    // check if there is a finalResult, and if "=" is press again, use the recent finalResult and carry out the equation again
    if(repeatEqual == "yes"){
        finalResult = operation(array[0],array[1],valueForRepeteadEqual)
        longScreen.value = array[0] + array[1] + valueForRepeteadEqual + "="
        screen.value=finalResult
        array[0] = finalResult
        finalResult = ""
        equal = "="
    }
    
    // First time "=" is press on
    else{
        finalResult = operation(array[0],array[1],currentValue)
        longScreen.value = array[0] + array[1] + currentValue + "="
        screen.value = finalResult
        array[0] = finalResult
        finalResult = ""
        valueForRepeteadEqual = currentValue
        currentValue = ""
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

    if (0<=currentValue.length && currentValue.length <5){
    currentValue += num
    }}

function handleOps(ops){

    // 1st time when an operator is pressed on
    if(array.length < 1){
        array.push(currentValue)
        currentValue = ops
        array.push (currentValue)
        currentValue = ""
    }

    // Check if there is an existing operator, if so replace it in array and longScreen as well
    else if(array.length > 1){
        currentValue = ops
        array.pop()
        array.push(currentValue)
        currentValue = ""
    }
}


