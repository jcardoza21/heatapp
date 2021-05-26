// Javascript para index.html
// Al aumentar la temperatura cambiar la imagen
var img_normal = "https://pbslm-contrib.s3.amazonaws.com/WGBH/conv16/conv16-int-thermalenergy/images/intro/intro_FIN.gif";
var img_rapido = "https://pbslm-contrib.s3.amazonaws.com/WGBH/conv16/conv16-int-thermalenergy/images/intro/intro_FIN_trans2fast.gif";
var img_lento = "https://pbslm-contrib.s3.amazonaws.com/WGBH/conv16/conv16-int-thermalenergy/images/intro/intro_FIN_trans2slow.gif";

function aumentar()
{
    var elemento = document.querySelector('#particulas-img').src;
    if (elemento == img_normal)
    {
        document.querySelector('#particulas-img').src = img_rapido;
        //document.querySelector('#particulas-progress').style = "width: 100%;";
        //document.querySelector('#particulas-progress').aria-valuenow = "100";
    }
    else if(elemento == img_lento)
    {
        //document.querySelector('#particulas-progress').aria-valuenow = "50";
        //document.querySelector('#particulas-progress').style = "width: 50%;";
        document.querySelector('#particulas-img').src = img_normal;
    }
}

function disminuir()
{
    var elemento = document.querySelector('#particulas-img').src;
    if (elemento == img_normal)
    {
        document.querySelector('#particulas-img').src = img_lento;
        //document.querySelector('#particulas-progress').aria-valuenow = "25";
        //document.querySelector('#particulas-progress').style = "width: 25%;";
    }
    else if(elemento == img_rapido)
    {
       // document.querySelector('#particulas-progress').aria-valuenow = "50";
        //document.querySelector('#particulas-progress').style = "width: 50%;";
        document.querySelector('#particulas-img').src = img_normal;
    }
}