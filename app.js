const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkBtn = document.querySelector("#btnCheck");
const errorMsg = document.querySelector("#error");
const amountQuantity = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];



function validateReturnAmount() {
    const billAmt = Number(billAmount.value);
    const cashAmt = Number(cashAmount.value);

    if ((billAmt > 0) && (cashAmt > 0)) {
        if (cashAmt < billAmt) {
            showErrorMessage('You seems broke, go and wash plates..')
        } else if (cashAmt === billAmt) {
            showErrorMessage('Bill is been paid, No change left, thanks')
        } else {
            showErrorMessage('');
            let balance = cashAmt - billAmt;
            calculateReturnChange(balance)
        }
    } else {
        showErrorMessage('You need to enter both the fields...');
    }
}



function calculateReturnChange(balance) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noteQuantity = Math.trunc(balance / availableNotes[i]);
        balance = balance % availableNotes[i];
        amountQuantity[i].innerText = noteQuantity;
    }
}

function showErrorMessage(msg) {
    errorMsg.innerText = msg;
}

checkBtn.addEventListener("click", validateReturnAmount);