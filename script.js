// card 1
document.getElementById("donate-btn-1")
 .addEventListener("click", function(){
    const donate1 = getInputFieldValueById('donate-1');
    const balance = getTextFieldValueById('account-balance');
    const amount1 = getTextFieldValueById('amount-1');

    const donatedAmount1 = amount1 + donate1;
    const newBalance = balance - donate1;
    document.getElementById('account-balance').innerText = newBalance.toFixed(2);
    document.getElementById('amount-1').innerText = donatedAmount1.toFixed(2);

});

// card 2
document.getElementById("donate-btn-2")
 .addEventListener("click", function(){
    const donate2 = getInputFieldValueById('donate-2');
    const balance = getTextFieldValueById('account-balance');
    const amount2 = getTextFieldValueById('amount-2');

    const donatedAmount2 = amount2 + donate2;
    const newBalance = balance - donate2;
    document.getElementById('account-balance').innerText = newBalance.toFixed(2);
    document.getElementById('amount-2').innerText = donatedAmount2.toFixed(2);

});

// card 3
document.getElementById("donate-btn-3")
 .addEventListener("click", function(){
    const donate3 = getInputFieldValueById('donate-3');
    const balance = getTextFieldValueById('account-balance');
    const amount3 = getTextFieldValueById('amount-3');

    const donatedAmount3 = amount3 + donate3;
    const newBalance = balance - donate3;
    document.getElementById('account-balance').innerText = newBalance.toFixed(2);
    document.getElementById('amount-3').innerText = donatedAmount3.toFixed(2);

});
