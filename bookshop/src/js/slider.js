const img = document.querySelector(".slider_photo")
const dots = document.querySelector(".dots")
const dot1 = document.querySelector("#first")
const dot2 = document.querySelector("#second")
const dot3 = document.querySelector("#third")

let i = 0

function imgChange() {
switch (i) {
    case (0):
        blackFriday();
        break;
    case (1):
        top10();
        break;
    case(2):
        booksSelection();
        break;
}
}

function interval () {
    i += 1
    if (i > 2) {
        i = 0
    }
    imgChange()
}

function blackFriday() {
    img.innerHTML = '<img src="../src/img/banner.png">'
    dot1.classList.add("active")
    dot2.classList.remove("active")
    dot3.classList.remove("active")
    i=0
}

function top10() {
    img.innerHTML = '<img src="../src/img/banner 2.png">'
    dot2.classList.add("active")
    dot1.classList.remove("active")
    dot3.classList.remove("active")
    i=1
}

function booksSelection() {
    img.innerHTML = '<img src="../src/img/banner 3.png">'
    dot3.classList.add("active")
    dot2.classList.remove("active")
    dot1.classList.remove("active")
    i=2
}

export const autoChange = setInterval(interval, 5000);


dot1.addEventListener('click', firstDot)

export function firstDot() {
    clearInterval()
    blackFriday()
    const autoChange = setInterval(interval, 5000);
    }


dot2.addEventListener('click', secondDot)

export function secondDot() {
    clearInterval()
    top10()
    const autoChange = setInterval(interval, 5000);
    }


dot3.addEventListener('click', thirdDot)

export function thirdDot() {
    clearInterval()
    booksSelection()
    const autoChange = setInterval(interval, 5000);
    }

