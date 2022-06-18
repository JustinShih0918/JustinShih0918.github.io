const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const msgN = document.querySelector('.msgN');
const msgP = document.querySelector('.msgP');
const msgE = document.querySelector('.msgE');

myForm.addEventListener('submit', whenAdd);


function whenAdd(e){
    e.preventDefault();

    let n = false;
    let p = false;
    let m = false;

    if(nameInput.value ===''){
        msgN.textContent = 'Please enter your User name';
        setTimeout(()=>{msgN.textContent = ''},3000);
        n = false;
    }
    else{
        n = true;
    }

    if(passwordInput.value === ''){
        msgP.textContent = 'Please enter your password'
        setTimeout(()=>{msgP.textContent = ''}, 3000);
        p = false;
    }
    else if(passwordInput.value.length<8){
        msgP.textContent = 'Your password is less than 8 words'
        setTimeout(()=>{msgP.textContent = ''}, 3000);
        p = false;
    }
    else{
        p = true;
    }

    if(emailInput.value ===''){
        msgE.textContent = 'Please enter Email account';
        setTimeout(()=>{msgE.textContent = ''},3000);
        m = false;
    }
    else if(search(emailInput.value)==false){
        msgE.textContent = 'Your account is not available';
        setTimeout(()=>{msgE.textContent = ''},3000);
        m = false
    }
    else{
        m = true;
    }

    console.log(search(emailInput.value));

    if(n&&p&&m){
        window.alert('Sign up Success, we eill back to Log in page now')
        window.location.href = '/Login.html';
    }
}

function search(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}