let initialPrice = document.querySelector("#initial-price");
let stockQuantity = document.querySelector("#stock-quantity");
let currentPrice = document.querySelector("#current-price");
let tellBtn = document.querySelector("#submit-btn");

let outputDiv = document.querySelector("#output");

function displayMessage(msg) {
    outputDiv.innerHTML = `<h2>${msg}</h2>`
}


function calcProfit(costPrice, sellingPrice) {
    let profit = sellingPrice - costPrice;

    return {
        "profit": profit,
        "profitPercent": profit / costPrice * 100
    }
}

function calcLoss(costPrice, sellingPrice) {
    let loss = costPrice - sellingPrice;

    return {
        "loss": loss,
        "lossPercent": loss / costPrice * 100
    }
}

function calculateProftAndLoss() {

    let costPrice = Number(stockQuantity.value) * (initialPrice.value);
    let sellingPrice = Number(currentPrice.value) * Number(stockQuantity.value);

    if (costPrice < sellingPrice) {
        let profitObj = calcProfit(costPrice, sellingPrice);
        displayMessage(`Hey the profit is Rs ${profitObj.profit} and percent is ${profitObj.profitPercent.toFixed(2)}`)

    }
    else if (costPrice > sellingPrice) {
        let lossObj = calcLoss(costPrice, sellingPrice);

        displayMessage(`Hey the loss is Rs ${lossObj.loss} and percent is ${lossObj.lossPercent.toFixed(2)}`)
    }
    else {
        displayMessage(`Neither Loss nor Profit`)
    }

}

tellBtn.addEventListener("click", () => {


    if (initialPrice.value === "" || currentPrice.value === "" || stockQuantity.value === "") {
        displayMessage("Fill all the fields");

    }
    else if (initialPrice.value <= 0 || stockQuantity.value <= 0) {
        displayMessage("Please input valid positive number");

    }
    else
        calculateProftAndLoss();


});