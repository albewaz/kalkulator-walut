{
const eur = 4.69;
const usd = 4.45;

const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector(".js-result");

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

    resultElement.innerText = amount < 0 ? "Wprowadź wartość dodatnią" : result.toFixed(2) + currencyText;
}

const init = () => {
    amountElement.addEventListener("input", updateResult);
    currencyElement.addEventListener("change", updateResult);
    updateResult();
}

init();
}