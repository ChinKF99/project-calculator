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
