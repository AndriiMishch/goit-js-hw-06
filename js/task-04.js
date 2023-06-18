const counterValue = document.querySelector("#value")
const deskBtn = document.querySelector("[data-action='decrement']")
const incrBtn = document.querySelector("[data-action='increment']")


deskBtn.addEventListener("click", decrement)
incrBtn.addEventListener("click", increment)

let value = 0;

function increment() {
    console.log('+1')
    value += 1;
    counterValue.textContent = value
}

function decrement() {
    console.log('-1')
    value -= 1;
    counterValue.textContent = value
}