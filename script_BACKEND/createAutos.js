window.onload = (event) =>{
    const apiUrl = 'https://proyecto-final-backend-o9fo0mwyp-david-roa-s-projects.vercel.app'
    const autosForm= document.getElementById('autosForm');

    autosForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const autoId = document.getElementById('id').value;
        const autoMake = document.getElementById('make').value;
        const autoModel = document.getElementById('model').value;
        const autoColor = document.getElementById('color').value;
        const autoyear = document.getElementById('year').value;
        const autoPrice = document.getElementById('price').value;

        

        try {
            const response = await fetch(`${apiUrl}/createautos`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({autoId:autoId,makeAuto:autoMake,modelAuto:autoModel,colorAuto:autoColor, 
                    yearAuto:autoyear, priceAuto:autoPrice})
            });
            const data = await response.json();
            if(response.ok){
                window.alert('Auto Creado Exitosamente');
                window.location.href = '/paginas/dashboard/autos.html'
            }else{
                window.alert('Auto no se pudo Crear');
            }
        } catch (error) {
            console.error(error);
            window.alert('Tenermos una falla en el servidor')
        }
    });
}