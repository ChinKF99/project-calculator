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
    let x = op
    switch (x){
        case "+":
            return add(numA,numB);
            break;
        case "-":
            return subtract(numA,numB);
            break;
        case "*":
            return multiply(numA,numB);
            break;
        case "/":
            return divide(numA,numB);
            break;
        
    }
}


let ops = ""
let previousValue = ""
let currentValue = ""

const numbers = document.querySelectorAll("#numbers")

const operators = document.querySelectorAll("#operator")

const screen = document.querySelector("#screen")

const operations = document.querySelector("#operations")



numbers.forEach((number) => number.addEventListener("click",(e)=>{
    handleNumber(e.target.value)
    screen.value = currentValue
}))

operators.forEach((operator) => operator.addEventListener("click", (e)=>{
    handleOps(e.target.value)
    screen.value = currentValue
    console.log(previousValue)
}))

function handleNumber(num){
    if (currentValue.length <=5){
    currentValue += num
}}

function handleOps(ops){
    previousValue = currentValue
    currentValue = ops
}

// operations.addEventListener("click",()=>{
//     console.log(numberOne)
//     console.log(numberTwo)
// })


