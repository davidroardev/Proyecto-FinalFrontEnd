window.onload =  (event) => {
    //const encodeData =window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data)
    loadAutos();
    const createAutos = document.getElementById('crearAuto');

    createAutos.addEventListener('click', function(event) {
        window.location.href= '/paginas/dashboard/createAutos.html'
    })
};
const apiUrl = 'https://proyecto-final-backend-mocha.vercel.app'
async function loadAutos() {
    try {
        const response = await fetch(`${apiUrl}/getautos`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const autos = await response.json();
        console.log(autos);
        
        const tbody = document.getElementById('autosTbody');
        tbody.innerHTML='';
        
        autos.forEach(auto => {
            const row = document.createElement('tr');
            const idcell = document.createElement('td');
            idcell.textContent = auto.auto_id

            const makecell = document.createElement('td');
            makecell.textContent = auto.make

            const modelcell = document.createElement('td');
            modelcell.textContent = auto.model

            const colorcell = document.createElement('td');
            colorcell.textContent = auto.color

            const yearcell = document.createElement('td');
            yearcell.textContent = auto.year

            const pricecell = document.createElement('td');
            pricecell.textContent = auto.price

            const actionCell = document.createElement('td');

            const modifyButton = document.createElement('button');
            modifyButton.textContent='Modificar';
            modifyButton.classList.add('modify_button')
            modifyButton.onclick = () => modifyAuto(auto.auto_id);

            const deleteButton = document.createElement('button');
            deleteButton.textContent='Eliminar';
            deleteButton.classList.add('delete_button')
            deleteButton.onclick = () => deleteAuto(auto.auto_id);

            actionCell.appendChild(modifyButton);
            actionCell.appendChild(deleteButton);

            row.appendChild(idcell);
            row.appendChild(makecell);
            row.appendChild(modelcell);
            row.appendChild(colorcell);
            row.appendChild(yearcell);
            row.appendChild(pricecell);
            row.appendChild(actionCell)
            

            tbody.appendChild(row)

        });
    } catch (error) {
        console.log(error);
    }
};

async function deleteAuto(id){
    try {
        const response = await fetch(`${apiUrl}/deleteautos/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        });
        const data = await response.json();
        if(response.ok){
            window.alert('Auto Eliminado Exitosamente');
            window.location.reload();
        }else{
            window.alert('Auto no se pudo Eliminar');
        }
    } catch (error) {
        console.error(error);
        window.alert('Tenermos una falla en el servidor')
    }
};

async function modifyAuto(id) {
    window.location.href=`/paginas/dashboard/updateAutos.html?id=${id}`
}


