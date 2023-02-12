document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposField=document.getElementById('deposit-field');
    const newDepositAmountString=deposField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);

    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalstring=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalstring);
    const currentDepositTotal=previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;
   
    const balenceTotalElement=document.getElementById('balence-total');
    const previousBalenceTotalstring=balenceTotalElement.innerText;
    const previousBalenceTotal=parseFloat(previousBalenceTotalstring);
    


const currentTotalBalence=previousBalenceTotal+newDepositAmount;
balenceTotalElement.innerText=currentTotalBalence;


    deposField.value='' ;
});