const segment3 = document.querySelector(".middle-segment")
const segment4 = document.querySelector(".under-left-segment")
const segment5 = document.querySelector(".under-middle-segment")
const a = 6
const b = 10
const c = 4
const button = document.querySelector(".execute")
segment3.addEventListener("click", () => {
    rewrite()
})
segment4.addEventListener("click", () => {
    rewrite()
})
function rewrite() {
    const temp = segment3.innerHTML
    segment3.innerHTML = segment4.innerHTML
    segment4.innerHTML = temp
}
button.addEventListener("click", () => {
    segment5.innerHTML += "Result: " + ((a+b)/2)*c
})
