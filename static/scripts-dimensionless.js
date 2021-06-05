// Javascript para dimensionless.html
// Cambiar contenido segun el numero adimensional seleccionado

function biot()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br><div class="row align-items-center"><h2><i class="bi bi-search"></i> Numero de Biot</h2></div><hr><div class="row align-items-center"><div class="col"><fieldset id="form-background"><form  id ="biot_prueba" method="post"><legend>DATOS</legend><label for="h" class="form-label">Coeficiente Convectivo: </label><div class= "input-group mb-3"><input class="form-control" id="h" name="h" placeholder="Unidades: Watts/metros cuadrados - Kelvin" type="number" min="0" step="1"/></div><label for="l" class="form-label">Longitud: </label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Metros" type="number" min="0" step="1"/></div><label for="k" class="form-label">Conductividad: </label><div class= "input-group mb-3"><input class="form-control" id= "k" name="k" placeholder="Unidades: Watts/ metros - Kelvin" type="number" min="0" step="1"/></div><div class="input-group mb-3"><button class="btn btn-primary" type="submit">Calcular</button></div></fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form></div><div class="col align-self-center"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/fb6a40833fde117ec39726c5d2a214123f0d9402" alt="biot" width="30%" height="15%"><p style="padding-top: 2em;"align="justify">Es un número adimensional que relaciona la transferencia de calor por conducción dentro de un cuerpo y la transferencia de calor por convección en la superficie de dicho cuerpo.El número de Biot tiene numerosas aplicaciones, entre ellas su uso en cálculos de transferencia de calor en disipadores de aletas.</p></div></div>';



        document.querySelector("#biot_prueba").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("h",document.querySelector("#h").value);
                data.append("l",document.querySelector("#l").value);
                data.append("k",document.querySelector("#k").value);

                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Biot = '+ result.Bi + '  [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

            // No recargar
            return false;
        };



}


// document.querySelector("#biot_prueba").onsubmit=()=>{

//         // Crear formulario en data
//         let data = new FormData();

//         // Parametros
//         data.append("h",document.querySelector("#h").value);
//         data.append("l",document.querySelector("#l").value);
//         data.append("k",document.querySelector("#k").value);

//         // Respuesta
//         let resp = new XMLHttpRequest();
//         resp.open("POST","/dimensionless");
//         resp.responseType = "json"
//         resp.send(data);

//         resp.onreadystatechange = () => {
//                 if(resp.readyState == 4){
//                         let result = resp.response;

//                         console.log(result);

//                         let cuadrito = document.querySelector("#result-div");
//                         cuadrito.textContent = 'Biot = '+ result.Bi + '-';
//                         cuadrito.setAttribute("class","Cuadrito");
//                 }
//         };

//     // No recargar
//     return false;
// };

function fourier()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br><div class="row align-items-center"><h2><i class="bi bi-search"></i> Numero de Fourier</h2></div><hr><div class="row align-items-center"><div class="col"><fieldset id="form-background"><form  id = "fourier" method="post"><legend>DATOS</legend><label for="alpha" class="form-label">Difusividad Termica: </label><div class= "input-group mb-3"><input class="form-control" id="alpha" name="alpha" placeholder="Unidades: metros cuadrados/ segundos" type="number" min="0" step="1"/></div><label for="t" class="form-label">Tiempo caracteristico: </label><div class= "input-group mb-3"><input class="form-control" id= "t" name="t" placeholder="Unidades: Segundos" type="number" min="0" step="1"/></div><label for="k" class="form-label">Longitud a través de la que la conducción de calor ocurre:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Metros" type="number" min="0" step="1"/></div><div class="input-group mb-3"><button class="btn btn-primary" type="submit">Calcular</button></div></fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form></div><div class="col align-self-center"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b39fcf1e45ec2a569b637b24d4f64530f0d9bb47" alt="fourier" width="30%" height="15%"><p style="padding-top: 2em;"align="justify">Es un número adimensional que caracteriza la conducción de calor. Conceptualmente es la relación entre la velocidad de la conducción de calor y la velocidad del almacenamiento de energía.</p></div></div>';

        document.querySelector("#fourier").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("alpha",document.querySelector("#alpha").value);
                data.append("t",document.querySelector("#t").value);
                data.append("l",document.querySelector("#l").value);

                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Fourier = '+ result.Fo + ' [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

                    // No recargar
            return false;
        };
}



function reynolds()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br>'+
        '<div class="row align-items-center"><h2><i class="bi bi-search">'+
            '</i> Numero de Reynolds</h2></div><hr>'+
            '<div class="row align-items-center">'+
                '<div class="col">'+
                    '<fieldset id="form-background"><form  id = "reynolds" method="post">'+
                        '<legend>DATOS</legend>'+
                        '<label for="rho" class="form-label">Densidad: </label>'+
                        '<div class= "input-group mb-3">'+
                            '<input class="form-control" id="rho" name="rho" placeholder="Unidades: kilogramos/metros cubicos" type="number" min="0" step="1"/>'+
                        '</div>'+
                        '<label for="diametro" class="form-label">Diametro: </label>'+
                        '<div class= "input-group mb-3">'+
                            '<input class="form-control" id= "diametro" name="dimetro" placeholder="Unidades: metros" type="number" min="0" step="0.01"/>'+
                        '</div>'+
                        '<label for="velocidad" class="form-label">Velocidad: </label>'+
                        '<div class= "input-group mb-3">'+
                            '<input class="form-control" id= "velocidad" name="velocidad" placeholder="Unidades: metros/segundos" type="number" min="0" step="0.01"/>'+
                        '</div>'+
                        '<label for="viscosidad" class="form-label">Viscosidad Dinamica:</label>'+
                        '<div class= "input-group mb-3">'+
                            '<input class="form-control" id= "viscosidad" name="viscosidad" placeholder="Unidades: Pascal-segundos " type="number" min="0" step="0.01"/>'+
                        '</div>'+
                        '<div class="input-group mb-3">'+
                            '<button class="btn btn-primary" type="submit">Calcular</button>'+
                        '</div>'+
                    '</fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form>'+
                '</div>'+
                '<div class="col align-self-center">'+
                    '<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f4ab2470912c49537785e0d4c39752c1c70d528b" alt="reynolds" width="30%" height="15%">'+
                    '<p style="padding-top: 2em;"align="justify">es un número adimensional utilizado en mecánica de fluidos, diseño de reactores y fenómenos de transporte para caracterizar el movimiento de un fluido. Su valor indica si el flujo sigue un modelo laminar o turbulento.  número de Reynolds se define como la relación entre las fuerzas inerciales (o convectivas, dependiendo del autor) y las fuerzas viscosas presentes en un fluido.</p>'+
                '</div></div>';

        document.querySelector("#reynolds").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("rho",document.querySelector("#rho").value);
                data.append("diametro",document.querySelector("#diametro").value);
                data.append("viscosidad",document.querySelector("#viscosidad").value);
                data.append("velocidad",document.querySelector("#velocidad").value);


                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Reynolds = '+ result.Re + ' [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

                    // No recargar
            return false;
        };

}

function grashof()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br>'+
        '<div class="row align-items-center">'+
            '<h2><i class="bi bi-search"></i> Numero de Grashof</h2>'+
        '</div><hr><div class="row align-items-center">'+
        '<div class="col">'+
            '<fieldset id="form-background">'+
                '<form  id = "grashof" method="post">'+
                '<legend>DATOS</legend>'+
                '<label for="betha" class="form-label">Coeficiente de expansión volumetrica: </label>'+
                '<div class= "input-group mb-3">'+
                    '<input class="form-control" id="betha" name="betha" placeholder="Unidades: Adimensional" type="number" min="0" step="0.01"/>'+
                '</div>'+
                '<label for="Ts" class="form-label">Temperatura de la superficie: </label>'+
                '<div class= "input-group mb-3">'+
                    '<input class="form-control" id= "Ts" name="Ts" placeholder="Unidades: Kelvin" type="number" min="0" step="1"/>'+
                '</div>'+
                '<label for="T" class="form-label">Temperatura del ambiente:</label>'+
                '<div class= "input-group mb-3">'+
                    '<input class="form-control" id= "T" name="T" placeholder="Unidades: Kelvin" type="number" min="0" step="1"/>'+
                '</div>'+
                '<label for="m" class="form-label">Masa: </label>'+
                '<div class= "input-group mb-3">'+
                '<input class="form-control" id= "m" name="m" placeholder="Unidades: Kg" type="number" min="0" step="0.1"/>'+
                '</div>'+
                '<label for="rho" class="form-label">Densidad: </label>'+
                '<div class= "input-group mb-3">'+
                '<input class="form-control" id= "rho" name="rho" placeholder="Unidades: Kg/centimetros cubicos" type="number" min="0" step="0.1"/>'+
                '</div>'+
                '<div class="input-group mb-3">'+
                    '<label for="v" class="form-label">Viscosidad cinemática: </label>'+
                    '<div class= "input-group mb-3">'+
                        '<input class="form-control" id= "v" name="v" placeholder="Unidades: m^2/s" type="number" min="0" step="0.0001"/>'+
                    '</div>'+
                    '<button class="btn btn-primary" type="submit">Calcular</button>'+
                '</div>'+
            '</fieldset>'+
             '<div id="result-div" class="form-group" bis_skin_checked="1">'+
             '</div>'+
                '</form>'+
        '</div>'+
        '<div class="col align-self-center">'+
            '<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/dc9310a6c9b52a586b2b264454379b1fa869a049" alt="grashof" width="60%" height="40%">'+
                '<p style="padding-top: 2em;"align="justify">Es un número adimensional que caracteriza la trasnferencia por convección natural.  Conceptualmente es la relación entre las fuerzas de flotación y las fuerzas viscosas.</p>'+
                            '</div></div>';

        document.querySelector("#grashof").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("betha",document.querySelector("#betha").value);
                data.append("Ts",document.querySelector("#Ts").value);
                data.append("T",document.querySelector("#T").value);
                data.append("m",document.querySelector("#m").value);
                data.append("rho",document.querySelector("#rho").value);
                data.append("v",document.querySelector("#v").value);


                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Grashof = '+ result.Gr + ' [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

                    // No recargar
            return false;
        };



}

function nusselt()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br>'+
        '<div class="row align-items-center">'+
            '<h2><i class="bi bi-search"></i> Numero de Nusselt</h2>'+
        '</div><hr>'+
        '<div class="row align-items-center">'+
            '<div class="col">'+
                '<fieldset id="form-background">'
                    +'<form  id = "nusselt" method="post">'
                        +'<legend>DATOS</legend>'
                        +'<label for="h" class="form-label">Coeficiente de transferencia de calor: </label>'
                        +'<div class= "input-group mb-3">'
                            +'<input class="form-control" id="h" name="h" placeholder="Unidades: W / (m2 K)" type="number" min="0" step="0.1"/>'
                        +'</div>'
                        +'<label for="lc" class="form-label">Longitud caracteristica: </label>'
                        +'<div class= "input-group mb-3">'
                            +'<input class="form-control" id= "lc" name="lc" placeholder="Unidades: m" type="number" min="0" step="0.1"/>'
                        +'</div>'
                        +'<label for="k" class="form-label">Conductividad termica</label>'
                        +'<div class= "input-group mb-3">'
                            +'<input class="form-control" id= "k" name="k" placeholder="Unidades: W / (m K)" type="number" min="0" step="1"/>'
                        +'</div>'
                        +'<div class="input-group mb-3">'
                            +'<button class="btn btn-primary" type="submit">Calcular</button>'
                        +'</div>'
                +'</fieldset>'
                +'<div id="result-div" class="form-group" bis_skin_checked="1">'
                +'</div>'
                    +'</form>'
                    +'</div>'
                    +'<div class="col align-self-center">'
                        +'<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/96515a559d6784c6bfc63e36f12a37afe084e705" alt="nusselt" width="30%" height="15%">'
                        +'<p style="padding-top: 2em;"align="justify">Conceptualmente es la relación entre la transferencia de calor por conducción de calor por convección y'
                        +'la transferencia de calor por conducción. Cuando el número de Rayleigh es inferior a 1000 se considera que la transferencia de calor es únicamente por'
                        +'conducción y el número de Nusselt toma el valor de la unidad.</p> <p style="padding-top: 2em;"align="justify">En cambio para números de Rayleigh'
                        +'superiores, la transferencia de calor es una combinación de conducción y convección, y el número de Nusselt toma valores superiores.</p>'
                    +'</div>'
        +'</div>';

        document.querySelector("#nusselt").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("h",document.querySelector("#h").value);
                data.append("lc",document.querySelector("#lc").value);
                data.append("k",document.querySelector("#k").value);

                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Nusselt = '+ result.Nus + ' [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

                    // No recargar
            return false;
        };



}
function peclet()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br>'
            +'<div class="row align-items-center">'
                +'<h2><i class="bi bi-search"></i> Numero de Peclet</h2>'
            +'</div><hr>'
            +'<div class="row align-items-center">'
                +'<div class="col">'
                    +'<fieldset id="form-background">'
                        +'<form  id = "peclet" method="post">'
                            +'<legend>DATOS</legend>'
                            +'<label for="alpa" class="form-label">Difusividad Termica: </label>'
                            +'<div class= "input-group mb-3">'
                                +'<input class="form-control" id="alpa" name="alpa" placeholder="Unidades: metros cuadrados/ segundos" type="number" min="0" step="1"/>'
                            +'</div>'
                            +'<label for="u" class="form-label">Velocidad del flujo: </label>'
                            +'<div class= "input-group mb-3">'
                                +'<input class="form-control" id= "u" name="u" placeholder="Unidades: metros/Segundos" type="number" min="0" step="1"/>'
                            +'</div>'
                            +'<label for="L" class="form-label">Longitud caracteristica:</label>'
                            +'<div class= "input-group mb-3">'
                                +'<input class="form-control" id= "L" name="L" placeholder="Unidades: Metros" type="number" min="0" step="1"/>'
                            +'</div>'
                            +'<div class="input-group mb-3">'
                                +'<button class="btn btn-primary" type="submit">Calcular</button>'
                            +'</div>'
                    +'</fieldset>'
                    +'<div id="result-div" class="form-group" bis_skin_checked="1">'

                    +'</div>'
                        +'</form>'
                +'</div>'
                +'<div class="col align-self-center">'
                    +'<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7255988e0d18672eb14388aa1ed80191e8fe491f" alt="peclet" width="30%" height="15%">'
                    +'<p style="padding-top: 2em;"align="justify">Conceptualmente es la relación entre el tiempo de difusión térmica y el tiempo de flujo.</p>'
                +'</div>'
            +'</div>';

        document.querySelector("#peclet").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("alpa",document.querySelector("#alpa").value);
                data.append("u",document.querySelector("#u").value);
                data.append("L",document.querySelector("#L").value);

                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Peclet = '+ result.Pe + ' [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

                    // No recargar
            return false;
        };

}
function prandtl()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br>'
            +'<div class="row align-items-center">'
                +'<h2><i class="bi bi-search"></i> Numero de Prandtl</h2>'
            +'</div><hr>'
            +'<div class="row align-items-center">'
                +'<div class="col">'
                    +'<fieldset id="form-background">'
                        +'<form  id = "prandtl" method="post">'
                        +'<legend>DATOS</legend>'
                        +'<label for="dt" class="form-label">Difusividad Termica: </label>'
                        +'<div class= "input-group mb-3">'
                            +'<input class="form-control" id="dt" name="dt" placeholder="Unidades: metros cuadrados/ segundos" type="number" min="0" step="1"/>'
                        +'</div>'
                        +'<label for="vc" class="form-label">Viscosidad cinemtatica: </label>'
                        +'<div class= "input-group mb-3">'
                            +'<input class="form-control" id= "vc" name="vc" placeholder="Unidades: metros cuadrados/Segundos" type="number" min="0" step="1"/>'
                        +'</div>'
                        +'<div class="input-group mb-3">'
                            +'<button class="btn btn-primary" type="submit">Calcular</button>'
                        +'</div>'
                    +'</fieldset>'
                    +'<div id="result-div" class="form-group" bis_skin_checked="1">'

                    +'</div>'
                        +'</form></div><div class="col align-self-center">'
                            +'<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/867e676c5236acaa8ed2fbd45bf42b85261dade4" alt="prandtl" width="30%" height="15%">'
                            +'<p style="padding-top: 2em;"align="justify">Conceptualmente es la relación entre la velocidad de difusión de la cantidad de momentum y la velocidad'
                            +'de difusión del calor. En problemas de transferencia de calor el número de Prandtl controla el espesor relativo de las capas límite de momento y'
                            +'térmica.</p> <p style="padding-top: 2em;"align="justify"> Cuando Pr es pequeño significa que el calor se difunde muy rápido comparado con la'
                            +'velocidad (momento).</p>'
                            +'</div></div>';

        document.querySelector("#prandtl").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("dt",document.querySelector("#dt").value);
                data.append("vc",document.querySelector("#vc").value);
                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Prandtl = '+ result.Pr + ' [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

                    // No recargar
            return false;
        };

}
function rayleigh()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br>'
        +'<div class="row align-items-center">'
            +'<h2><i class="bi bi-search"></i> Numero de Rayleigh</h2>'
        +'</div><hr>'
        +'<div class="row align-items-center">'
            +'<div class="col"><fieldset id="form-background">'
                +'<form  id = "rayleigh" method="post">'
                    +'<legend>DATOS</legend>'

                    +'<label for="a" class="form-label">Difusividad térmica:</label>'
                    +'<div class= "input-group mb-3">'
                        +'<input class="form-control" id= "a" name="a" placeholder="Unidades: Kelvin" type="number" min="0" step="1"/>'
                    +'</div>'

                    +'<label for="b" class="form-label">Coeficiente de expansión térmica: </label>'
                    +'<div class= "input-group mb-3">'
                        +'<input class="form-control" id="b" name="b" placeholder="Unidades: 1/K" type="number" min="0" step="0.1"/>'
                    +'</div>'
                    +'<label for="T1" class="form-label">Temperatura de la pared: </label>'
                    +'<div class= "input-group mb-3">'
                        +'<input class="form-control" id= "T1" name="T1" placeholder="Unidades: Kelvin" type="number" min="0" step="1"/>'
                    +'</div>'
                    +'<label for="T2" class="form-label">Temperatura del fluido alejado:</label>'
                    +'<div class= "input-group mb-3">'
                        +'<input class="form-control" id= "T2" name="T2" placeholder="Unidades: Kelvin" type="number" min="0" step="1"/>'
                    +'</div>'

                    +'<label for="LC" class="form-label">Longitud caracteristica:</label>'
                    +'<div class= "input-group mb-3">'
                        +'<input class="form-control" id= "LC" name="LC" placeholder="Unidades: Metros" type="number" min="0" step="1"/>'
                    +'</div>'

                    +'<label for="ni" class="form-label">Viscosidad cinematica:</label>'
                    +'<div class= "input-group mb-3">'
                        +'<input class="form-control" id= "ni" name="ni" placeholder="Unidades: metros cuadrados/segundos" type="number" min="0" step="1"/>'
                    +'</div>'

                    +'<div class="input-group mb-3">'
                        +'<button class="btn btn-primary" type="submit">Calcular</button>'
                    +'</div>'
                    +'</fieldset>'
                   +'<div id="result-div" class="form-group" bis_skin_checked="1">'

                    +'</div>'
                +'</form>'
            +'</div>'
            +'<div class="col align-self-center">'
                +'<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/798b8b72580e2dd1b9de3391233a5b4e33cd9583" alt="rayleigh" width="60%" height="40%">'
                +'<p style="padding-top: 2em;"align="justify">Es un número adimensional definido como el producto del numero de Grashof y el número de Prandtl. Está asociado con la transferencia de calor en el interior del fluido</p>'
            +'</div></div>';


        document.querySelector("#rayleigh").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("a",document.querySelector("#a").value);
                data.append("b",document.querySelector("#b").value);
                data.append("T1",document.querySelector("#T1").value);
                data.append("T2",document.querySelector("#T2").value);
                data.append("LC",document.querySelector("#LC").value);
                data.append("ni",document.querySelector("#ni").value);


                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Rayleigh = '+ result.Ra + ' [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

                    // No recargar
            return false;
        };

}
function stokes()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br>'
        +'<div class="row align-items-center">'
            +'<h2><i class="bi bi-search"></i> Numero de Stokes</h2>'
        +'</div><hr>'
        +'<div class="row align-items-center">'
            +'<div class="col">'
                +'<fieldset id="form-background">'
                    +'<form  id = "stokes" method="post">'
                        +'<legend>DATOS</legend>'
                        +'<label for="vo" class="form-label">Velocidad del fluido lejos del obstáculo o corriente libre: </label>'
                        +'<div class= "input-group mb-3">'
                            +'<input class="form-control" id="vo" name="vo" placeholder="Unidades: metros/ segundos" type="number" min="0" step="1"/>'
                        +'</div>'
                        +'<label for="to" class="form-label">Tiempo de relajación de la partícula: </label>'
                        +'<div class= "input-group mb-3">'
                            +'<input class="form-control" id= "to" name="to" placeholder="Unidades: Segundos" type="number" min="0" step="1"/>'
                        +'</div>'
                        +'<label for="do" class="form-label">Dimensión característica del obstáculo:</label>'
                        +'<div class= "input-group mb-3">'
                            +'<input class="form-control" id= "do" name="do" placeholder="Unidades: Metros" type="number" min="0" step="1"/>'
                        +'</div>'
                        +'<div class="input-group mb-3">'
                            +'<button class="btn btn-primary" type="submit">Calcular</button>'
                        +'</div>'
                +'</fieldset>'
                +'<div id="result-div" class="form-group" bis_skin_checked="1">'

                +'</div>'
                +'</form>'
            +'</div>'
        +'<div class="col align-self-center">'
            +'<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/1b537902c10559f06ecc240bcade20036a0aab62" alt="stokes" width="30%" height="15%">'
            +'<p style="padding-top: 2em;"align="justify">Es un número adimensional definido como el cociente entre la distancia de parada de una partícula y la dimensión característica del obstáculo. Si este es mayor a 1: las partículas continuarán en línea recta mientras que el fluido evitará el obstáculo. Es decir las partículas impactarán con el obstáculo. Si es menor a 1: Las partículas seguirán las líneas de corriente del fluido.</p></div></div>';


        document.querySelector("#stokes").onsubmit=()=>{

                // Crear formulario en data
                let data = new FormData();

                // Parametros
                data.append("vo",document.querySelector("#vo").value);
                data.append("to",document.querySelector("#to").value);
                data.append("do",document.querySelector("#do").value);

                // Respuesta
                let resp = new XMLHttpRequest();
                resp.open("POST","/dimensionless");
                resp.responseType = "json"
                resp.send(data);

                resp.onreadystatechange = () => {
                        if(resp.readyState == 4){
                                let result = resp.response;

                                console.log(result);

                                let cuadrito = document.querySelector("#result-div");
                                cuadrito.textContent = 'Stokes = '+ result.St + ' [-]';
                                cuadrito.setAttribute("class","Cuadrito");
                        }
                };

                    // No recargar
            return false;
        };

}


