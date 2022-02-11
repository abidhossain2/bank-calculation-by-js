const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener('click', ()=>{
    var depositMoney = document.getElementById('depositAmount');
    var depositValue = document.getElementById("deposit-field");
    //deposit total
    depositMoney.innerText = parseFloat(depositMoney.innerText) + parseFloat(depositValue.value);
    //new balance
    var totalBalance = document.getElementById("balance");
    totalBalance.innerText = parseFloat(totalBalance.innerText) + parseFloat(depositMoney.innerText);
    depositValue.value = '';
})


const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener('click', ()=>{
    var totalBalance = document.getElementById("balance");
    var withdrawField = document.getElementById("withdraw-field");
    totalBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(withdrawField.value);
    var withdrawBalance = document.getElementById("withdraw-balance");
    withdrawBalance.innerText =parseFloat(withdrawBalance.innerText) + parseFloat(withdrawField.value);
    withdrawField.value = '';

})