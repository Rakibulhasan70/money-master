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

    // show error message when income is less than expenses cost
    if (totalExpenses > incomeInput.value) {
        alert('can not find the ans')
    }

    // show the valid calculation when all input value is positive number

    else if (incomeInput.value > 0 && foodInput.value > 0 && rentInput.value > 0 && clothesInput.value > 0) {
        const totalExpensesElement = document.getElementById('total-expenses');
        totalExpensesElement.innerText = totalExpenses
        // update the balance input
        const balance = document.getElementById('balance');
        balance.innerText = incomeInput.value - totalExpenses
    }

    // show error message when all input value is string and negative number
    else {
        (isNaN(incomeInput.value && foodInput.value && rentInput.value && clothesInput.value))
        alert('can not find the result')
    }
}
// saving balance part

function savingAmount() {
    const incomeInput = inputValue('income');
    const savingInput = inputValue('saving');
    const balance = document.getElementById('balance');
    const remainingbalance = document.getElementById('remaning-balance');

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = incomeInput.value * (savingInput.value) / 100;
    // show error message when saving amount is bigger than income amount 
    debugger
    if (savingAmount.innerText < balance.innerText && savingAmount.innerText < 100 && savingAmount.innerText > 0) {
        // remaining balance part
        const remainingbalance = document.getElementById('remaning-balance');
        remainingbalance.innerText = balance.innerText - savingAmount.innerText;
    }
    else {
        alert('can not match the result')
        savingAmount.innerText = '00';
        remainingbalance.innerText = balance.innerText;
    }
}