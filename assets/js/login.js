
(function app (){
    const USER_LIST = [
        { id: 1, userName: 'mahdi', pass: '1234' },
        { id: 2, userName: 'ali', pass: '1234' },
        { id: 3, userName: 'reza', pass: '1234' },
        { id: 4, userName: 'soli', pass: '1234' },
    ];
    const alert = document.getElementById("alert");
    const alertValid = document.getElementById("alert-valid");
    const username = document.getElementById('username');
    const pass = document.getElementById('pass');
    const handleSubmit = (e) => {
        e.preventDefault();


        
        const user = USER_LIST.filter( item => item.userName.toLowerCase() === username.value.toLowerCase().trim());
        if(user.length && pass.value === user[0].pass){
            console.log('login success');

  
            localStorage.setItem('user-name', JSON.stringify(user[0].userName));
            alert.classList.add("d-none");
            alertValid.classList.remove("d-none");
            setTimeout(() => {

                navigation.navigate('../index.html')            
            },1200)
        }else{
            console.log('invalid data');
            alert.classList.remove("d-none");
            username.value = '';
            pass.value = '';
            
        }
    }

    
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click',handleSubmit)


    // bootstrap alert 


    
})();
