window.onload = (event) =>{
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit',  async function(event){
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/api/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName:username, password:password})
            });

            const data = await response.json();
            console.log(data);
            if(response.ok){
                loginMessage.textContent= 'login Exitoso'
                loginMessage.style.color = '#CCC'
            }else{
                loginMessage.textContent= data.message || 'Hubo un Error en el Login'
                loginMessage.style.color = '#eb5e28'
            }
        } catch (error) {
            console.log(error)
            loginMessage.textContent = 'Hubo un Error en el Login catch'
            loginMessage.style.color = 'red'
        }
    });

}