window.onload = function (){
    let existUserName = ['admin','user'];
    let userNameInput = document.getElementById('username');
    let userNameError = document.getElementById('username-error');
    document.getElementById('form').addEventListener('submit',function (e){
        e.preventDefault();

        if (validUser){
            window.alert('Poprawnie wysłąny formularz');
                    }
    });
function validUser(){
    let userValid = true;

    if (!checkRequieredInput(userNameInput)){
        userValid = false;
        setError('Podaj nazwę użytkownika')

    } else if (!chechMinMaxLenght(userNameInput,3,12)){
        userValid = false;
        setError('Nazwa użytkownika powinna posiadać od 3 do 12 znaków')

    } else if(checkExistUserName(userNameInput)){
        userValid =false;
        setError('Nazwa użytkownika zotała już wysłana')

    } else {
        userNameError.setAttribute('hidden', ' ')
    }

    return userValid;
    }
    function checkRequieredInput(input){
    return input.value.length > 0;
    }
    function chechMinMaxLenght(input,min,max){
    return input.value.length >= min && input.value.length <= max;
    }
    function checkExistUserName(input){
    return existUserName.includes(input)
    }
    function setError(msg){
        userNameError.textContent = 'Podaj nazwę użytkownika';
        userNameError.removeAttribute('hidden');
    }

};