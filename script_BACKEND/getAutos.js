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

async function loadAutos() {
    try {
        const response = await fetch('http://localhost:3000/getautos',{
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


            row.appendChild(idcell);
            row.appendChild(makecell);
            row.appendChild(modelcell);
            row.appendChild(colorcell);
            row.appendChild(yearcell);
            row.appendChild(pricecell);
            

            tbody.appendChild(row)

        });
    } catch (error) {
        console.log(error);
    }
};
