const elDisplay = document.getElementById("display")
const elBtns = document.querySelectorAll("button")

console.log('kijelzo' + elDisplay)
console.log('gombok' + elBtns)

elBtns.forEach(function (button) {
    button.addEventListener('click', calculate)
})


function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value
    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (elDisplay.value !== '') {
            // calculate and show the answer to display
            elDisplay.value = eval(elDisplay.value);
        }
    } else if (clickedButtonValue === 'C') {
        // clear everything on display
        elDisplay.value = '';
    } else {
        // otherwise concatenate it to the display
        elDisplay.value += clickedButtonValue;
    }
}









