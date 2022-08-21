import { random } from "./random.js";

const colors = [
    "red", "blue", "green", "lightsteelblue", "aqua", "aquamarine"
]

const main = document.querySelector("main")
const span = document.querySelector("span")
const button = document.querySelector("button")

button.addEventListener("click", () => {

    let index = random(colors.length)

    main.style.backgroundColor = colors[index]
    span.innerText = colors[index]
    button.style.backgroundColor = colors[index]
})