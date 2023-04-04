console.log("Cześć");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let eur = 4.69;
let usd = 4.45;

function updateResult() {
    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result, currencyText;

    switch (currency) {
        case "EUR":
            result = amount / eur;
            currencyText = " euro";
            break;
        case "USD":
            result = amount / usd;
            currencyText = " dolarów";
            break;
    }

    if(amount < 0) {
        resultElement.innerText = "Wprowadź wartość dodatnią";
    } else {
        resultElement.innerText = result.toFixed(2) + currencyText;
    }
}

amountElement.addEventListener("input", updateResult);
currencyElement.addEventListener("change", updateResult);




