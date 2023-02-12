document.getElementById("btn-withdrow").addEventListener('click',function(){
    const withdrowField=document.getElementById('withdrow-field');
    const newWidrowAmountStrng=withdrowField.value;
    const newWitdrowAmount=parseFloat(newWidrowAmountStrng);



    const withdrowTotalElement=document.getElementById('withdrow-total');
    const previouswithdrowTotalString=withdrowTotalElement.innerText;
    const previouswithdrowTotal=parseFloat(previouswithdrowTotalString);
    const currentWithdrowTotal=previouswithdrowTotal+newWitdrowAmount;
    withdrowTotalElement.innerText=currentWithdrowTotal;


    const balenceTotalElement=document.getElementById('balence-total');
    const previousBalenceTotalstring=balenceTotalElement.innerText;
    const previousBalenceTotal=parseFloat(previousBalenceTotalstring);

    const currentTotalBalence=previousBalenceTotal-newWitdrowAmount;
         balenceTotalElement.innerText=currentTotalBalence;

    withdrowField.value="";
})