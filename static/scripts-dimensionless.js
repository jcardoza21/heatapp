// Javascript para dimensionless.html
// Cambiar contenido segun el numero adimensional seleccionado

function biot()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br><div class="row align-items-center"><h2><i class="bi bi-search"></i> Numero de Biot</h2></div><hr><div class="row align-items-center"><div class="col"><fieldset id="form-background"><form  id = "biot" method="post"><legend>DATOS</legend><label for="h" class="form-label">Coeficiente Convectivo: </label><div class= "input-group mb-3"><input class="form-control" id="h" name="h" placeholder="Unidades: Watts/metros cuadrados - Kelvin" type="number" min="0" step="1"/></div><label for="l" class="form-label">Longitud: </label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Metros" type="number" min="0" step="1"/></div><label for="k" class="form-label">Conductividad: </label><div class= "input-group mb-3"><input class="form-control" id= "k" name="k" placeholder="Unidades: Watts/ metros - Kelvin" type="number" min="0" step="1"/></div><div class="input-group mb-3"><button class="btn btn-primary" type="submit">Calcular</button></div></fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form></div><div class="col align-self-center"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/fb6a40833fde117ec39726c5d2a214123f0d9402" alt="biot" width="30%" height="15%"><p style="padding-top: 2em;"align="justify">Es un número adimensional que relaciona la transferencia de calor por conducción dentro de un cuerpo y la transferencia de calor por convección en la superficie de dicho cuerpo.El número de Biot tiene numerosas aplicaciones, entre ellas su uso en cálculos de transferencia de calor en disipadores de aletas.</p></div></div>';

}
document.querySelector("#biot").onsubmit=()=>{

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
                        cuadrito.textContent = 'Biot = '+ result.Bi + '-';
                        cuadrito.setAttribute("class","Cuadrito");
                }
        };

    // No recargar
    return false;
};

function fourier()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br><div class="row align-items-center"><h2><i class="bi bi-search"></i> Numero de Fourier</h2></div><hr><div class="row align-items-center"><div class="col"><fieldset id="form-background"><form  id = "fourier" method="post"><legend>DATOS</legend><label for="alpha" class="form-label">Difusividad Termica: </label><div class= "input-group mb-3"><input class="form-control" id="alpha" name="alpha" placeholder="Unidades: metros cuadrados/ segundos" type="number" min="0" step="1"/></div><label for="t" class="form-label">Tiempo caracteristico: </label><div class= "input-group mb-3"><input class="form-control" id= "t" name="t" placeholder="Unidades: Segundos" type="number" min="0" step="1"/></div><label for="k" class="form-label">Longitud a través de la que la conducción de calor ocurre:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Metros" type="number" min="0" step="1"/></div><div class="input-group mb-3"><button class="btn btn-primary" type="submit">Calcular</button></div></fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form></div><div class="col align-self-center"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b39fcf1e45ec2a569b637b24d4f64530f0d9bb47" alt="fourier" width="30%" height="15%"><p style="padding-top: 2em;"align="justify">Es un número adimensional que caracteriza la conducción de calor. Conceptualmente es la relación entre la velocidad de la conducción de calor y la velocidad del almacenamiento de energía.</p></div></div>';

}
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
                        cuadrito.textContent = 'Fourier = '+ result.Fo + '-';
                        cuadrito.setAttribute("class","Cuadrito");
                }
        };

    // No recargar
    return false;
};


function reynolds()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br><div class="row align-items-center"><h2><i class="bi bi-search"></i> Numero de Reynolds</h2></div><hr><div class="row align-items-center"><div class="col"><fieldset id="form-background"><form  id = "reynolds" method="post"><legend>DATOS</legend><label for="alpha" class="form-label">Densidad: </label><div class= "input-group mb-3"><input class="form-control" id="alpha" name="alpha" placeholder="Unidades: kilogramos/metros cubicos" type="number" min="0" step="1"/></div><label for="t" class="form-label">Velocidad: </label><div class= "input-group mb-3"><input class="form-control" id= "t" name="t" placeholder="Unidades: metros/segundos" type="number" min="0" step="1"/></div><label for="k" class="form-label">Diametro:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Metros" type="number" min="0" step="1"/></div><label for="k" class="form-label">Viscosidad Dinamica:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Pascal -segundos" type="number" min="0" step="1"/></div><div class="input-group mb-3"><button class="btn btn-primary" type="submit">Calcular</button></div></fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form></div><div class="col align-self-center"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f4ab2470912c49537785e0d4c39752c1c70d528b" alt="fourier" width="30%" height="15%"><p style="padding-top: 2em;"align="justify">Es un número adimensional utilizado en mecánica de fluidos, diseño de reactores y fenómenos de transporte para caracterizar el movimiento de un fluido. Su valor indica si el flujo sigue un modelo laminar o turbulento. El número de Reynolds se define como la relación entre las fuerzas inerciales (o convectivas, dependiendo del autor) y las fuerzas viscosas presentes en un fluido.</p></div></div>';

}

function grashof()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br><div class="row align-items-center"><h2><i class="bi bi-search"></i> Numero de Grashof</h2></div><hr><div class="row align-items-center"><div class="col"><fieldset id="form-background"><form  id = "foruier" method="post"><legend>DATOS</legend><label for="alpha" class="form-label">Coeficiente de Expansion Volumetrica: </label><div class= "input-group mb-3"><input class="form-control" id="alpha" name="alpha" placeholder="Unidades: 1/Kelvin" type="number" min="0" step="1"/></div><label for="t" class="form-label">Temperatura en la superficie: </label><div class= "input-group mb-3"><input class="form-control" id= "t" name="t" placeholder="Unidades: Kelvin" type="number" min="0" step="1"/></div><label for="k" class="form-label">Temperatura del ambiente:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Kelvin" type="number" min="0" step="1"/></div><label for="k" class="form-label">Volumen:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Metros cubicos" type="number" min="0" step="1"/></div><label for="k" class="form-label">Viscosidad cinematica:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Metros cuadrados / segundos" type="number" min="0" step="1"/></div><div class="input-group mb-3"><button class="btn btn-primary" type="submit">Calcular</button></div></fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form></div><div class="col align-self-center"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2f1df0874ac7e611570129fe269c1abaa277ef34" alt="fourier" width="60%" height="40%"><p style="padding-top: 2em;"align="justify">Es un número adimensional en mecánica de fluidos que es proporcional al cociente entre las fuerzas de flotación y las fuerzas viscosas que actúan en un fluido.</p></div></div>';

}

function nusselt()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br><div class="row align-items-center"><h2><i class="bi bi-search"></i> Numero de Nusselt</h2></div><hr><div class="row align-items-center"><div class="col"><fieldset id="form-background"><form  id = "foruier" method="post"><legend>DATOS</legend><label for="alpha" class="form-label">Coeficiente de transferencia termica: </label><div class= "input-group mb-3"><input class="form-control" id="alpha" name="alpha" placeholder="Unidades: Watts /metros cuadrados-Kelvin" type="number" min="0" step="1"/></div><label for="t" class="form-label">Longitud caracteristica: </label><div class= "input-group mb-3"><input class="form-control" id= "t" name="t" placeholder="Unidades: Metros" type="number" min="0" step="1"/></div><label for="k" class="form-label">Conductividad Termica:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades:Watts/ metros-Kelvin" type="number" min="0" step="1"/></div><div class="input-group mb-3"><button class="btn btn-primary" type="submit">Calcular</button></div></fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form></div><div class="col align-self-center"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/96515a559d6784c6bfc63e36f12a37afe084e705" alt="fourier" width="30%" height="15%"><p style="padding-top: 2em;"align="justify">Es un número adimensional que mide el aumento de la transmisión de calor desde una superficie por la que un fluido discurre (transferencia de calor por convección) comparada con la transferencia de calor si ésta ocurriera solamente por conducción. </p></div></div>';

}

function prandtl()
{
        document.querySelector('#form-content').innerHTML = "";
        document.querySelector('#form-content').innerHTML = '<br><br><div class="row align-items-center"><h2><i class="bi bi-search"></i> Numero de Prandtl</h2></div><hr><div class="row align-items-center"><div class="col"><fieldset id="form-background"><form  id = "foruier" method="post"><legend>DATOS</legend><label for="alpha" class="form-label">Viscosidad Dinamica: </label><div class= "input-group mb-3"><input class="form-control" id="alpha" name="alpha" placeholder="Unidades: Pascal-segundos" type="number" min="0" step="1"/></div><label for="t" class="form-label">Calor específico a presión constante: </label><div class= "input-group mb-3"><input class="form-control" id= "t" name="t" placeholder="Unidades: Joule/kilogramos-Kelvin" type="number" min="0" step="1"/></div><label for="k" class="form-label">Conductividad Termica:</label><div class= "input-group mb-3"><input class="form-control" id= "l" name="l" placeholder="Unidades: Watts/metros-Kelvin" type="number" min="0" step="1"/></div><div class="input-group mb-3"><button class="btn btn-primary" type="submit">Calcular</button></div></fieldset><div id="result-div" class="form-group" bis_skin_checked="1"></div></form></div><div class="col align-self-center"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/651f3e283def8fe0f4d93ba44a75ce64f735014d" alt="fourier" width="30%" height="15%"><p style="padding-top: 2em;"align="justify">Es un número adimensional proporcional al cociente entre la velocidad de difusión de la cantidad de momento (viscosidad) y la difusividad térmica.</p></div></div>';

}



