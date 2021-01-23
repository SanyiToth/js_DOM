//10
let elBtnNight = document.getElementById("night")
let allElements = document.querySelectorAll("h1, p, button, body")
elBtnNight.addEventListener("click", function () {
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = "white";
        if (allElements[i] === 'body') {
            allElements[i].style.background = "black"
        }
    }
})



