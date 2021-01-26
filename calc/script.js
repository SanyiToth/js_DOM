const elDisplay = document.getElementById("display")
const elBtns = document.querySelectorAll("button")


elBtns.forEach(button => {
    button.addEventListener('click', event => {
        let clickedButtonValue = event.target.value
        if (clickedButtonValue === '=') {
            if (elDisplay.value !== '') {
                elDisplay.value = eval(elDisplay.value);
                console.log(elDisplay.value)
            }
        } else if (clickedButtonValue === 'C') {
            elDisplay.value = '';
        } else {
            elDisplay.value += clickedButtonValue;
        }

    })
})
console.log('4+4')
console.log(eval("4+4"))







