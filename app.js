const billAmount = document.querySelector("#bill-amount")
const cashAmount = document.querySelector("#cash-amount")
const checkBtn = document.querySelector("#btnCheck")
const errorMsg = document.querySelector("#error")
const amountQuantity = document.querySelector(".no-of-notes")
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

checkBtn.addEventListener("click", validateReturnAmount);

function validateReturnAmount(){
    if(billAmount.value > 0){
        if(cashAmount.value >= billAmount.value){
            const balance = cashAmount.value - billAmount.value;
            calculateReturnChange(balance);
        }
    } 
        else {
            showErrorMessage("Check the cash given amount!!")
        }
    }


function calculateReturnChange(balance){
    for(let i=0; i<availableNotes.length; i++){
        const noteQuantity = Math.trunc(balance/availableNotes[i]);
        balance = balance % availableNotes[i];
        amountQuantity[i].innerText = noteQuantity;
    }
}

function showErrorMessage(msg){
    errorMsg.innerText = msg
}