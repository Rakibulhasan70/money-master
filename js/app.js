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

    if (totalExpenses > 0 && totalExpenses != '') {
        const totalExpensesElement = document.getElementById('total-expenses');
        totalExpensesElement.innerText = totalExpenses
        // update the balance input
        const balance = document.getElementById('balance');
        balance.innerText = incomeInput.value - totalExpenses
    }
    else {
        alert('can not find the result')
    }


}
// saving part

function savingAmount() {
    const incomeInput = inputValue('income');
    const savingInput = inputValue('saving');

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = incomeInput.value * (savingInput.value) / 100;

    // remaining balance 
    const remainingbalance = document.getElementById('remaning-balance');

    remainingbalance.innerText = balance.innerText - savingAmount.innerText;



}