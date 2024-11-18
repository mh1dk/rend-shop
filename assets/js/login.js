(function app (){
    const USER_LIST = [
        { id: 1, userName: 'mahdi', pass: '1234' },
        { id: 2, userName: 'ali', pass: '1234' },
        { id: 3, userName: 'reza', pass: '1234' },
        { id: 4, userName: 'soli', pass: '1234' },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById('username');
        const pass = document.getElementById('pass');
        const alertLogin = document.getElementById('alert-login');
        const user = USER_LIST.filter( item => item.userName.toLowerCase() === username.value.toLowerCase().trim());
        if(user.length && pass.value === user[0].pass){
            console.log('login success');
            localStorage.setItem('user-name', JSON.stringify(user[0].userName));
            setTimeout(() => {

                navigation.navigate('../index.html')   
                // alert('hi')
            alertLogin.createElement('div');
               alertLogin.classList.add('alert','alert-danger');
               alertLogin.setAttribute('role','alert');
               alertLogin.innerHTML = `
               ji`


            
            },2000)
        }else{
            console.log('invalid data');
            
        }
    }





    
    
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click',handleSubmit)
    
})()