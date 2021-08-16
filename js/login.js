document.getElementById('login-submit').addEventListener('click', function(){
    const emailFiled = document.getElementById('user-email');
    const useremail =emailFiled.value;
    const passwordFiled = document.getElementById('user-password');
    const userpassword =passwordFiled.value;
    if(useremail == 'talukder@gmail.com' && userpassword == 'akash'){
        window.location.href = 'banking.html';
    }
    else{
        window.location.href = 'trbaper.html';
    }
 
})


// bank deposite
