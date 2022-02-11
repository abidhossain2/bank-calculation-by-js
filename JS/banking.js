function bankingCalculation(input){
    var inputField = document.getElementById(input);
    var inputValue = inputField.value;
    var amount = parseFloat(inputValue);
    inputField.value = '';
    return amount;
}

document.getElementById("deposit-btn").addEventListener("click", ()=>{
    let depositValue = bankingCalculation('deposit-field')
    let deposit = document.getElementById('depositAmount');
    if(depositValue >= 20){
    deposit.innerText = parseFloat(deposit.innerText) + depositValue;
    let total = document.getElementById('balance');
    total.innerText = parseFloat(total.innerText) + depositValue;
    }else{
        alert("You can not deposit under $20");
    }
})

document.getElementById("withdraw-btn").addEventListener("click", ()=>{
   let withdrawValue = bankingCalculation('withdraw-field')
   let withdraw = document.getElementById('withdraw-balance');
    if(withdrawValue >= 20){
    withdraw.innerText = parseFloat(withdraw.innerText) + withdrawValue;
    let totalWithdraw = document.getElementById('balance');
    totalWithdraw.innerText = parseFloat(totalWithdraw.innerText) - withdrawValue;
    }else{
        alert("You can not withdraw under $20");
    }
})