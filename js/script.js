console.log("Cześć");

const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector(".js-result");

const eur = 4.69;
const usd = 4.45;

const updateResult = () => {
    const amount = amountElement.value;
    const currency = currencyElement.value;
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