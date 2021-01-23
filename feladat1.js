//1.
let elHead = document.querySelector("h1")
let elP = document.querySelector(".text")
let elUl = document.querySelector("ul")
console.log(elHead)
console.log(elP)
console.log(elUl)
let liClick = document.getElementById("klikk")

liClick.addEventListener("click", function () {
    liClick.innerHTML = "You clicked me!"
})

//2.

let imgRs6 = document.getElementById("audi")
console.log(imgRs6.getAttribute("alt"))

//3.

let classArray = Array.from(document.querySelectorAll(".text, .headline, .unordered"))
console.log(classArray) //nem jo, vegig kell iteralni a dokumentumon es megkeresni az osszes class-t

//4.

let elPempty = document.getElementById("empty")

elPempty.innerText = elP.innerText

//5.

let menuItems = ["Home", "About US", "Services", "Prices", "Protfolio", "Blog", "Contact"]
let liItems = document.getElementsByTagName('li')

for (let i = 0; i < menuItems.length; i++) {
    liItems[i].innerText = menuItems[i]
    liItems[i].addEventListener("mouseover", function () {
        liItems[i].style.backgroundColor = "green"
        liItems[i].style.cursor = "pointer"
        liItems[i].style.width = "100px"

    })
    liItems[i].addEventListener("mouseleave", function () {
        liItems[i].style.backgroundColor = "white"
    })
}


//összetett feladat: a megadott karakternél hosszabb szavakat ,jelölje sárgán a szövegben.

const paragraph = document.querySelector('.text')

console.log(paragraph)

function highlight(txtLength, element) {
    // console.log(txtLength, element)
    let innerText = element.innerText;
    let words = innerText.split(" ")
    // console.log(words)
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= txtLength) {
            words[i] = `<span>${words[i]}</span>`
        }
    }
    // console.log("modifieed words:" + words)
    element.innerHTML = words.join(" ")
}

highlight(6, paragraph)

//6.

let elBtn = document.getElementById("btn")

elBtn.addEventListener("click", function () {
    elBtn.style.width = elBtn.offsetWidth + 100 + "px";
    elBtn.style.height = elBtn.offsetHeight + 100 + "px";
})

//7

let elClickPic = document.getElementById("clickme")
let elClickBtn = document.getElementById("butt")

elClickBtn.addEventListener("click", function () {
    elClickPic.style.display = "block"
})

elClickPic.addEventListener("click", function () {
    elClickPic.style.display = "none"
})

//8

let elH3 = document.querySelector("h3")
let elColorPick = document.getElementById("favcolor")
console.log(elH3)

elColorPick.addEventListener("change", function () {
    let actualColor = elColorPick.value
    console.log(actualColor)
    elH3.style.color = actualColor
})

//9
let elPlus = document.getElementById("plus")
let elMinus = document.getElementById("minus")
let count = Number.parseInt(document.getElementById("counter").innerText)

elPlus.addEventListener("click", function () {
    count++
    document.getElementById("counter").innerText = count
})

elMinus.addEventListener("click", function () {
    if (count > 0)
        count--
    document.getElementById("counter").innerText = count
})




