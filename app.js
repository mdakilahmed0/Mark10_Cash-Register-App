const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-amount")
const checkBtn = document.querySelector("#btnCheck")
const showErrorMessage = document.querySelector("#error")
const quantityOfNotes = document.querySelector(".no-of-notes")
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

// checkBtn.addEventListener("click", validateReturnAmount);

// function calculateReturnChange(balance){
//     for(let i=0; i<availableNotes.length; i++){
//         const noteQuantity = Math.trunc(balance/availableNotes[i]);
//         balance = balance % availableNotes[i];
//         amountQuantity[i].innerText = noteQuantity;
//     }
// }

// function validateReturnAmount(){
//     if(billAmount.value > 0){
//         if(cashAmount.value >= billAmount.value){
//             const balance = cashAmount.value - billAmount.value;
//             calculateReturnChange(balance);
//         }
//     } 
//         else {
//             showErrorMessage("Check the cash given amount!!")
//         }
//     }



// function showErrorMessage(msg){
//     errorMsg.innerText = msg
// }

checkBtn.addEventListener("click", validateBillAmount);
 
function validateBillAmount() {
    
    if (billAmount.value > 0) {

        if (cashGiven.value >= billAmount.value) {

            const balanceAmount = cashGiven.value - billAmount.value;
            calculateChange(balanceAmount);
        }   
         
    } 
    else {
        showMessage("Invalid Bill Amount!!!!");

    }
}

function calculateChange(balanceAmount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noteQuantity = Math.trunc(balanceAmount / availableNotes[i]);
        balanceAmount = balanceAmount % availableNotes[i];
        quantityOfNotes[i].innerText = noteQuantity;
    }

}

function showMessage(msg) {
    errorMessage.innerText = msg;
}