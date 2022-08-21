import { random } from "./random.js"

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

const main = document.querySelector("main")
const span = document.querySelector("span")
const button = document.querySelector("button")

button.addEventListener("click", () => {

    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
        hexColor += hex[random(hex.length)]
    }

    main.style.backgroundColor = hexColor
    span.innerText = hexColor
    button.style.background = hexColor
})