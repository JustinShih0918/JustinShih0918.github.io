const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const msgN = document.querySelector('.msgN');
const msgP = document.querySelector('.msgP');
const h = document.querySelector('.Logout');

myForm.addEventListener('submit' , whenLogin);


function whenLogin(e){
    e.preventDefault();
    let a = false;
    let b = false;
    let style = true;
    if(nameInput.value === ''){
        msgN.textContent = 'Please enter your User name'
        setTimeout(()=>{msgN.textContent = '';}, 3000);
        a = false;
    }else{
        a = true;
    }
    

    if(passwordInput.value === ''){
        msgP.textContent = 'Please enter your password'
        setTimeout(()=>{msgP.textContent = ''}, 3000);
        b = false;
    }
    else if(passwordInput.value.length<8){
        msgP.textContent = 'Your password is less than 8 words'
        setTimeout(()=>{msgP.textContent = ''}, 3000);
        b = false;
    }
    else{
        b = true;
    }

    if(a == true && b == true && style == true){
        h.textContent = `${nameInput.value}`;
        h.addEventListener('mouseover' , over);
        h.addEventListener('mouseout' , out);
        h.addEventListener('click' , whenClick);

        window.alert('Log in Success, We will back to Home now ')
        window.location.href = '/index.html';
    }


    nameInput.value = '';
    passwordInput.value = '';
}

function over(){
    h.style.backgroundColor = '#ddd';
    h.style.color = 'black';
}

function out(){
    h.style.backgroundColor = '#333';
    h.style.color = 'white';
}

function whenClick(){
    h.textContent = '';
    style = false;
    h.removeEventListener('mouseover' , over);
    h.removeEventListener('mouseout' , out);
    h.style.backgroundColor = '#333';
    h.style.color = 'white';
    console.log(style);
}