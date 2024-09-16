window.onload = (event) =>{
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage')


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
            const encodeData = btoa(JSON.stringify(data));
            console.log(encodeData);

            if(response.ok){
                loginMessage.textContent= 'login Exitoso'
                loginMessage.style.color = '#CCC'
                window.location.href = `../paginas/dashboard/dashboard.html#${encodeData}`
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

    registerForm.addEventListener('submit', async(event)=>{ //esta linea se usa como arrow function para prueba 
        event.preventDefault();

        const newUserName = document.getElementById('new_username').value;
        const newPassword = document.getElementById('new_password').value;
        const email = document.getElementById('email').value;
        const firstName = document.getElementById('FirstName').value;
        const lastName = document.getElementById('LastName').value;
        const phoneNumber = document.getElementById('Phone').value;

        try {
            const response = await fetch('http://localhost:3000/user/register',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName:newUserName,password:newPassword,email:email,
                    firstName:firstName,PhoneNumber:phoneNumber,lastName:lastName})
            });
            const data = await response.json();
            console.log(data);
            if(response.ok){
                registerMessage.textContent= 'Registro Exitoso'
                registerMessage.style.color = '#CCC'
            }else{
                registerMessage.textContent= data.message || 'Hubo un Error en el Registro'
                registerMessage.style.color = '#eb5e28'
            }

        } catch (error) {
            console.log(error)
            registerMessage.textContent = 'Hubo un Error en el Registro catch'
            registerMessage.style.color = 'red'
        }

    })

};