//10
let elBtnNight = document.getElementById("night")
let allElements = document.querySelectorAll("h1, p")
let nightView = false
elBtnNight.addEventListener("click", function () {
    if (!nightView) {
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.color = "white";
        }
        document.querySelector("body").style.background = "black"
        document.querySelector("button").innerText = "Nappali nézet"
        nightView = true
    } else {
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.color = "black";
        }
        document.querySelector("body").style.background = "white"
        document.querySelector("button").innerText = "Éjszakai nézet"
        nightView = false
    }
})






