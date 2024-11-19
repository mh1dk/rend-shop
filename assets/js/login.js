
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


        
        const user = USER_LIST.filter( item => item.userName.toLowerCase() === username.value.toLowerCase().trim());
        if(user.length && pass.value === user[0].pass){
            console.log('login success');

            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
            const appendAlert = (message, type) => {
              const wrapper = document.createElement('div')
              wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
              ].join('')
            
              alertPlaceholder.append(wrapper)
            }
            
            const alertTrigger = document.getElementById('liveAlertBtn')
            if (alertTrigger) {
              alertTrigger.addEventListener('click', () => {
              
                    
                    appendAlert('Nice, you login successfully', 'success')
              })
            }


            localStorage.setItem('user-name', JSON.stringify(user[0].userName));
            setTimeout(() => {

                navigation.navigate('../index.html')            
            },5000)
        }else{
            console.log('invalid data');
            
        }
    }

    
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click',handleSubmit)


    // bootstrap alert 


    
})();
