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

    const div = document.createElement('div');
    div.classList.add('rounded-xl','p-6','border','shadow-lg');
    div.innerHTML = `
    <h2 class="font-bold text-lg">${amount1} Tk is donated for Flood Relief in Noakhali,Bangladesh </h2>
    <p>Date: ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    document.getElementById('transaction-container').appendChild(div);

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

    const div = document.createElement('div');
    div.classList.add('rounded-xl','p-6','border','shadow-lg');
    div.innerHTML = `
    <h2 class="font-bold text-lg">${amount2} Tk is donated for Flood Relief in Feni,Bangladesh </h2>
    <p>Date: ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    document.getElementById('transaction-container').appendChild(div);

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

    const div = document.createElement('div');
    div.classList.add('rounded-xl','p-6','border','shadow-lg');
    div.innerHTML = `
    <h2 class="font-bold text-lg">${amount3} Tk is donated for Flood Relief in Cumilla,Bangladesh </h2>
    <p>Date: ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    document.getElementById('transaction-container').appendChild(div);

});
