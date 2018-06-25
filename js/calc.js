// set some variables so we can shortcuts them for later use.
let num1 = $('#number1').val() //grabs first number
let num2 = $('#number2').val() //grabs second number
let operator = $('#operation').val //grabs operator 

// when the equals is clicked, set new variables and then validate inputs
$('#equals').on('click', function() {
    num1 = $('#number1').val() 
    num2 = $('#number2').val() 
    operator = $('#operation').val()
    validate()
})

// validate function goes here
// numbers should be numbers
// operators should be +, -, *, or /
// check for user inputs (blanks are not there at all)
function validate() {
    if (num1 === '' || num2 === '') {
        $('#result').html('Sorry, one of those is not a valid number!')
    } else if (isNaN(num1) || isNaN(num2)) {
        $('#result').html('Sorry, one of those is not a valid number!')
    } else if (operator === '') {
        $('#result').html('Sorry, that is not a valid operator')
    } else if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        doMath()
    } else {
        $('#result').html('Sorry, that is not a valid operator')
    }
}



// assuming the validation is true, run the calculator

function doMath(){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (operator) {
        case '+': 
        $('#result').html((num1 + num2).toFixed(2))
        break;
        case '-':
        $('#result').html((num1 - num2).toFixed(2))
        break;
        case '*':
        $('#result').html((num1 * num2).toFixed(2))
        break;
        case '/':
        $('#result').html((num1 / num2).toFixed(2))
        break;
    }
}