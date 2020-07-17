var ciudad = document.getElementById('inputCiudad');
var sucursal = document.getElementById('inputSucursal');



function sucursalChange(){
    sucursal.value = ciudad.value;
}

function validateManejo(){
    var aceptar = document.getElementById('aceptar');
    if(aceptar.checked){
        document.getElementById('manejoDatos').style.display = 'none';
        document.getElementById('aceptarEnvio').checked = true;
    }else{
        document.getElementById('informacion').style.display = 'none';
        document.getElementById('mensajeRechazo').style.display = 'flex';
    }
}

function validateVinculacion(){
    var tomador = document.getElementById('tomador').checked;
    var asegurador = document.getElementById('asegurador').checked;
    var beneficiario = document.getElementById('beneficiario').checked;
    var afianzado = document.getElementById('afianzado').checked;
    var proveedor = document.getElementById('proveedor').checked;
    var intermediario = document.getElementById('intermediario').checked;
    var otro = document.getElementById('otro').value;
    if(tomador==false && asegurador==false && beneficiario==false && afianzado==false && proveedor==false && intermediario==false && otro==""){
        var vinculacion =  document.getElementById('claseVinculacion');
        vinculacion.className = 'row padre border-alert';
        window.scrollTo(0,vinculacion.offsetTop-50);

    }else{
        document.getElementById('claseVinculacion').className = 'row padre';
        document.getElementById('submitButton').click();
    }
}