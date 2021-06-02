// Javascript para convection.html
document.querySelector("#convection").onsubmit=()=>{

        let data = new FormData();
        
        let t = document.querySelector("#T");
        data.append("T",t.value);
        data.append("Ts",document.querySelector("#Ts").value);
        data.append("A",document.querySelector("#A").value);
        data.append("h",document.querySelector("#h").value);

        let resp = new XMLHttpRequest();
        resp.open("POST","/convection");
        resp.responseType = "json"
        resp.send(data);

        resp.onreadystatechange = () => {
                if(resp.readyState == 4){
                        let result = resp.response;

                        console.log(result);
                        
                        let cuadrito = document.querySelector("#result-div");
                        cuadrito.textContent = 'Resultado: '+ result.q + ' W';
                        cuadrito.setAttribute("class","Cuadrito");
                }
        };
        
    return false;
};
