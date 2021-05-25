// Cambiar el texto y la imagen del primer ejemplo para cada mecanismo de transferencia de calor
function example1(mecanismo)
{
    if (mecanismo == conduccion)
    {
        document.getElementById('ejemplo1-text').innerHTML = 
        "<ol><li>La mayor parte de la conducción ocurre en la superficie de la Tierra. Durante el día, la radiación solar calienta el suelo y el agua, que luego calientan el aire que los toca. El aire no es un buen conductor de energía térmica porque las partículas de los gases que componen la atmósfera están muy separadas.</li></ol>";
        document.getElementById('ejemplo1-img').src="https://pbslm-contrib.s3.amazonaws.com/WGBH/conv16/conv16-int-thermalenergy/images/earth_science/earth_2.gif";
    }
    else 
    {
        if (mecanismo == conveccion)
        {
            document.getElementById('ejemplo1-text').innerHTML = '';
            document.getElementById('ejemplo1-img').src='';
        }
        else
        {
            if(mecanismo == radiacion)
            {
                document.getElementById('ejemplo1-text').innerHTML = '';
                document.getElementById('ejemplo1-img').src='';
            }
        }
    }
}

