document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;



    const foodInput = document.getElementById('food-input');
    const foodAmount = foodInput.value;


    const rentInput = document.getElementById('rent-input');
    const rentAmount = rentInput.value;

    const clothesInput = document.getElementById('clothes-input');
    const clothesAmount = clothesInput.value;

    const totalExpenses = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount);


    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses;


    const balance = document.getElementById('balance');
    balance.innerText = incomeAmount - totalExpenses


})

document.getElementById('saving').addEventListener('click', function () {
    console.log('sohag')
})