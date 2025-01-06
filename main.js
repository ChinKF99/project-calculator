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


const numbers = document.querySelectorAll("#numbers")

const operators = document.querySelectorAll("#operator")

const results = document.querySelector("#result")

const operations = document.querySelector("#operations")



numbers.forEach(number => number.addEventListener("click",()=>{
    if(ops === ""){
        let numberOne = 0
        numberOne = +number.value
        results.value = numberOne
        return numberOne
    } else{
        let numberTwo = 0
        numberTwo = +number.value
        results.value = numberTwo
        return numberTwo
    }
}))

operators.forEach(operator => operator.addEventListener("click", ()=>{
    ops = operator.value
    results.value = ops
    return ops
}))

operations.addEventListener("click",()=>{
    console.log(numberOne)
    console.log(numberTwo)
})


