let input = "";

function addToInput(value) {
    input += value;
    document.querySelector(".input").innerHTML = input;
}

function clearInput() {
    input = "";
    document.querySelector(".input").innerHTML = "";
    document.querySelector(".output").innerHTML = "";
}
function deleteInput() {
    input = "";
    let dValue = document.querySelector(".input").innerHTML;
    dValue = dValue.toString().slice(0, -1);
    document.querySelector(".input").innerHTML = dValue;
}

function calculate() {
    let result = eval(input);
    document.querySelector(".output").innerHTML = result;
    input = result.toString();
}
