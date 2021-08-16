document.getElementById('deposite-button').addEventListener('click',function(){
    
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    // console.log(depositeAmount);
    // update depositetottal
    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeTotal =previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText =  newDepositeTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousbalanceTotal = parseFloat(balanceTotalText);
     const newBalanceTotal = previousbalanceTotal + newDepositeAmount;
     balanceTotal.innerText =newBalanceTotal

    depositeInput.value = '';
})

// handel withdrow
document.getElementById('withdrow-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdrow-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw tottal
    const withdrawTotal = document.getElementById('withdrow-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawText)
    const newWithdrawtotal = previouswithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawtotal;


    //  update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // cleare withdraw input 
    withdrawInput.value = '';
    
})