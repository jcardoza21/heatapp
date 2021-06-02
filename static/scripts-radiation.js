// Javascript para radiation.html
document.querySelector("#radiation").onsubmit=()=>{

        let data = new FormData();
        
        let t = document.querySelector("#T");
        data.append("T",t.value);
        data.append("T_2",document.querySelector("#T_2").value);
        data.append("emissivity",document.querySelector("#emissivity").value);

        let resp = new XMLHttpRequest();
        resp.open("POST","/radiation");
        resp.responseType = "json"
        resp.send(data);

        resp.onreadystatechange = () => {
                if(resp.readyState == 4){
                        let result = resp.response;

                        console.log(result);
                        
                        let cuadrito = document.querySelector("#result-div");
                        cuadrito.textContent = 'Densidad de Flujo de Calor: '+ result.q + ' W/m^2';
                        cuadrito.setAttribute("class","Cuadrito");
                }
        };
        
    return false;
};
