let elDisplay = document.getElementById("display")
let elNumbers = document.querySelectorAll(".numbers")
let elOperator = document.querySelectorAll(".btn")
let firstNumber;
let secondNumber;
let result;

for (let i = 0; i < elNumbers.length; i++) {
    elNumbers[i].addEventListener("click", function () {
        if (elDisplay.innerText !== '0') {
            elDisplay.innerText = elDisplay.innerText + elNumbers[i].innerText
            firstNumber = Number.parseInt(elDisplay.innerText)
        } else {
            elDisplay.innerText = elNumbers[i].innerText
        }
        if (elNumbers[i].innerText === '+') {
            console.log(firstNumber + ' + ')
            elDisplay.innerText = '0'
        }
        if (elNumbers[i].innerText === '=') {
            secondNumber = elDisplay.innerText
            console.log(secondNumber)
            elDisplay.innerText = Number.parseInt(secondNumber) + Number.parseInt(firstNumber)
        }
    })

}













