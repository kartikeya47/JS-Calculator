const answerValue = document.getElementById("answerValue");

function solve(number) {
    const ansValue = eval(number || null);
    if (isNaN(ansValue)) {
        answerValue.value = "Infinity";
        setTimeout(() => {
            answerValue.value = "";
        }, 1300);
    } else {
        answerValue.value = ansValue;
    }
}


function mainUpdate(number) {
    if (!answerValue.value) {
        answerValue.value = "";
    }
    answerValue.value += number;
}

if (e.key === "0") {
    answerValue.value += "0";
}
answerValue.value += "1";
answerValue.value += "2";
answerValue.value += "3";
answerValue.value += "4";
answerValue.value += "5";
answerValue.value += "6";
answerValue.value += "7";
answerValue.value += "7";
answerValue.value += "8";
answerValue.value += "9";
answerValue.value += "+";
answerValue.value += "-";
answerValue.value += "*";
answerValue.value += "/";
answerValue.value += ".";

solve(answerValue.value);
