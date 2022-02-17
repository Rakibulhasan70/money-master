function inputValue(iteam) {
    const Input = document.getElementById(iteam + '-input');
    return Input;

}

function calculateMoney() {
    const incomeInput = inputValue('income')
    const foodInput = inputValue('food');
    const rentInput = inputValue('rent');
    const clothesInput = inputValue('clothes');
    // add all expenses
    const totalExpenses =
        parseFloat(foodInput.value) +
        parseFloat(rentInput.value) +
        parseFloat(clothesInput.value);
    debugger

    if (totalExpenses > incomeInput.value) {
        alert('can not find the ans')
    }

    else if (incomeInput.value > 0 && foodInput.value > 0 && rentInput.value > 0 && clothesInput.value > 0) {
        const totalExpensesElement = document.getElementById('total-expenses');
        totalExpensesElement.innerText = totalExpenses
        // update the balance input
        const balance = document.getElementById('balance');
        balance.innerText = incomeInput.value - totalExpenses
    }


    else {
        (isNaN(incomeInput.value && foodInput.value && rentInput.value && clothesInput.value))
        alert('can not find the result')
    }


}
// saving part

function savingAmount() {
    const incomeInput = inputValue('income');
    const savingInput = inputValue('saving');
    const balance = document.getElementById('balance');
    debugger
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = incomeInput.value * (savingInput.value) / 100;

    if (savingAmount.innerText < balance.innerText) {
        // remaining balance 
        const remainingbalance = document.getElementById('remaning-balance');

        remainingbalance.innerText = balance.innerText - savingAmount.innerText;
    }
    else {
        alert('can not match the result')
    }




}