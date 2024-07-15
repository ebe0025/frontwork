function validate() {



    const userIdValue = document.getElementById('userId').value; 
    const userPw = document.getElementById('userPw');
    const checkPwValue = document.getElementById('checkPw').value;
    const nameValue = document.getElementById('name').value;
    const email = document.getElementById('email');


    let regExp = /^[a-zA-Z]{1}[a-zA-Z\d]{3,11}$/;

    if(!regExp.test(userIdValue))
    {
        alert('아이디가 잘못된 형식으로 입력되었습니다.');
        return false;
    }


    regExp = /^[a-z\d1-9!@#$%^&*]{8,15}$/


    if(!regExp.test(userPw.value))
    {
        alert('비밀번호가 잘못된 형식으로 입력되었습니다.');
        userPw.value = '';
        userPw.focus();
        return false;
    }
    

    if(checkPwValue != userPw.value)
    {
        alert('비밀번호가 일치하지 않습니다.');
        return false;
    }
    regExp = /^[가-힣]{2,}$/

    if(!regExp.test(nameValue)){
        alert('이름의 형식이 맞지 않습니다.')
        return false;
    }

    regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?/

    if(!regExp.test(email.value)){
        alert('이메일의 형식에 맞지 않습니다.')
        email.value = '';
        email.focus();
        
        return false;
    }
}