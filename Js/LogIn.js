const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const msgN = document.querySelector('.msgN');
const msgP = document.querySelector('.msgP');
const h1 = document.querySelector('.Logout1');

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
        h1.textContent = `${nameInput.value}`;
        h1.addEventListener('mouseover' , over);
        h1.addEventListener('mouseout' , out);
        h1.addEventListener('click' , whenClick);
        // window.alert('Log in Success, We will back to Home now ')
        // window.location.href = '/index.html';
    }


    nameInput.value = '';
    passwordInput.value = '';
}

function over(){
    h1.style.backgroundColor = '#ddd';
    h1.style.color = 'black';
}

function out(){
    h1.style.backgroundColor = '#333';
    h1.style.color = 'white';
}

function whenClick(){
    h1.textContent = '';
    style = false;
    h1.removeEventListener('mouseover' , over);
    h1.removeEventListener('mouseout' , out);
    h1.style.backgroundColor = '#333';
    h1.style.color = 'white';
    console.log(style);
}