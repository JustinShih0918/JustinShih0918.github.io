const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const msgN = document.querySelector('.msgN');
const msgP = document.querySelector('.msgP');

myForm.addEventListener('submit' , whenLogin);
console.log(msgP.textContent);
function whenLogin(e){
    e.preventDefault();
    let a = false;
    let b = false;
    if(nameInput.value === ''){
        msgN.textContent = 'Please enter your User name'
        console.log(msgN.textContent);
        setTimeout(()=>{msgN.textContent = '';}, 3000);
        a = false;
    }else{
        a = true;
    }
    

    if(passwordInput.value === ''){
        msgP.textContent = 'Please enter your password'
        console.log(msgP.textContent);
        setTimeout(()=>{msgP.textContent = ''}, 3000);
        a = false;
    }
    else if(passwordInput.value.length<8){
        msgP.textContent = 'Your password is less than 8 words'
        console.log(msgP.textContent);
        setTimeout(()=>{msgP.textContent = ''}, 5000);
        a = false;
    }
    else{
        b = true;
    }

    console.log(a);
    console.log(b);
    if(a == true && b == true){
        window.alert('We will back to  Home now ')
        window.location.href = '/home.html';
    }



    nameInput.value = '';
    passwordInput.value = '';

}