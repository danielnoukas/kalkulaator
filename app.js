const btns = Array.prototype.slice.call(document.querySelectorAll(".btn"))
const answer = document.querySelector('#answer');
let currentnumber = '';
let firstnumber;

btns.map(btn => btn.addEventListener('click',(evt) => {
    if (typeof parseInt(evt.target.innerText) == 'number') {
        saveCurrentNumber(evt.target.innertext)
    }
}))

function saveCurrentNumber(number) {
    currentnumber += number
    updateDisplay();
}

function updateDisplay() {
    answer.innerText = currentNumber
}