window.onload = async (event) =>{
    const idAuto = getQueryParams('id');
    const auto = await loadAuto(idAuto);
    console.log(auto)
    const autosForm = document.getElementById('autosForm')
    const id = document.getElementById('id');
    const make = document.getElementById('make');
    const model = document.getElementById('model');
    const color = document.getElementById('color');
    const year = document.getElementById('year');
    const price = document.getElementById('price');

    id.value = auto.auto_id    // Estos son los valores son los que me trae la linea 3, el resultado la funcion loadAuto()
    make.value = auto.make     // Al parecer los resultados de la funcion estan ligados a la base de datos 
    model.value = auto.model
    color.value = auto.color
    year.value = auto.year
    price.value = auto.price

    autosForm.addEventListener('submit', async function (event) {
        event.preventDefault()
        await updateAutos(idAuto,make.value,model.value,color.value,year.value,price.value);
        
    })
}
const apiUrl = 'https://proyecto-final-backend-o9fo0mwyp-david-roa-s-projects.vercel.app'

function getQueryParams (param){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

async function loadAuto(id){
    try {
        const response = await fetch(`${apiUrl}/getautosbyid/${id}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            },
        });
        const autos = await response.json();
        return autos[0]
    } catch (error) {
        console.error(error);
    }
};

async function updateAutos(id,make,model,color,year,price) {
    try {
        const response = await fetch (`${apiUrl}/updateauto/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({makeAuto:make,modelAuto:model,colorAuto:color,yearAuto:year,priceAuto:price})
        });
        const data = await response.json();
            if(response.ok){
                window.alert('Auto Actualizada Exitosamente');
                window.location.href = '/paginas/dashboard/autos.html'
            }else{
                window.alert('Auto no se pudo Actualizar');
            }
    } catch (error) {
        console.error(error);
        window.alert('Tenermos una falla en el servidor')
    }
    
}
