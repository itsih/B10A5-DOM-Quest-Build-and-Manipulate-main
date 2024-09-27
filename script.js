// card 1
document.getElementById("donate-btn-1")
 .addEventListener("click", function(){
    const donate1 = getInputFieldValueById('donate-1');
    const balance = getTextFieldValueById('account-balance');
    const amount1 = getTextFieldValueById('amount-1');

    // input validation
    if(donate1<=0 || donate1>balance || isNaN(donate1) ){
        alert('Invalid Input');
        return;
    }
    my_modal_1.showModal();
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
    
    // input validation
    if(donate2<=0 || donate2>balance || isNaN(donate1)){
        alert('Invalid Input');
        return;
    }
    my_modal_1.showModal();
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

    // input validation
    if(donate3<=0 || donate3>balance || isNaN(donate1)){
        alert('Invalid Input');
        return;
    }
    my_modal_1.showModal();
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

// toggle functionality


const historyTab = document.getElementById("History-tab");
const donationTab = document.getElementById("Donation-tab");

// History toggle
historyTab.addEventListener("click", function(){
    historyTab.classList.add("shadow-lg","bg-[#b4f461]");
    donationTab.classList.remove("shadow-lg","bg-[#b4f461]");

    document.getElementById("donate-section").classList.add("hidden");
    document.getElementById("transaction-section").classList.remove("hidden");

});
// Donation toggle
donationTab.addEventListener("click", function(){
    donationTab.classList.add("shadow-lg","bg-[#b4f461]");
    historyTab.classList.remove("shadow-lg","bg-[#b4f461]");

    document.getElementById("transaction-section").classList.add("hidden");
    document.getElementById("donate-section").classList.remove("hidden");
});