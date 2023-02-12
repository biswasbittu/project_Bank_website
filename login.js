document.getElementById('btn-submit').addEventListener('click',function(){
   const emailField= document.getElementById('user-email');
   const emailUpper=emailField.value;
   const email=emailUpper.toLowerCase();



//    Password Field
const passwordField=document.getElementById('user-password')
const password=passwordField.value;

if(email==='biswasbittu@gmail.com' && password ==='741501' )
{
    console.log("valid User")
}

else{
    console.log("Invalid User")
}
})