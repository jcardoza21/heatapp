// Javascript para conduction.html

document.querySelector("#conduction").onsubmit=()=>{

        // Crear formulario en data
        let data = new FormData();
        let t1 = document.querySelector("#T1");

        // Parametros
        data.append("T1",t1.value);
        data.append("T2",document.querySelector("#T2").value);
        data.append("material",document.querySelector("#material-selector").value);
        data.append("deltax",document.querySelector("#deltax").value);
        data.append("Area",document.querySelector("#Area").value);

        // Respuesta
        let resp = new XMLHttpRequest();
        resp.open("POST","/conduction");
        resp.responseType = "json"
        resp.send(data);

        resp.onreadystatechange = () => {
                if(resp.readyState == 4){
                        let result = resp.response;

                        console.log(result);

                        let cuadrito = document.querySelector("#result-div");
                        cuadrito.textContent = 'Flujo de Calor: '+ result.q + ' W';
                        cuadrito.setAttribute("class","Cuadrito");
                }
        };

    // No recargar
    return false;
};
