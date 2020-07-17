

function direccion(select, input, dir){
    var fullDir = document.getElementById(dir);
    fullDir.innerHTML = "";    
    for(var i=1; i<=5; i++){      
        fullDir.innerHTML += document.getElementById(select+i).value + " " + document.getElementById(input+i).value.toString().toUpperCase() + " ";        //.replace("-"," ")
    }
    fullDir.innerHTML = fullDir.innerHTML.split("-").join(" ");
    fullDir.innerHTML = fullDir.innerHTML.split("_").join(" ");
    fullDir.innerHTML = fullDir.innerHTML.split(".").join("");
    
}

function guardarDir( cancel, fullD, dir){    
    var fullDir = document.getElementById(fullD);
    var dirResidencia = document.getElementById(dir);
    dirResidencia.value = fullDir.innerHTML;
    document.getElementById(cancel).click();
}

function validateTipoESect(e){
    if(e.value == 'NATURAL'){
        document.getElementById('TipoEmpSector').style.display = 'none';
        document.getElementById('Nombres').style.display = 'block';
        document.getElementById('Apellidos').style.display = 'block';
        document.getElementById('PrimerNombre').required = true;
        document.getElementById('PrimerApellido').required = true;
        document.getElementById('SegundoApellido').required = true;
    }else{
        document.getElementById('TipoEmpSector').style.display = 'block';
        document.getElementById('Nombres').style.display = 'none';
        document.getElementById('Apellidos').style.display = 'none';
        document.getElementById('PrimerNombre').required = false;
        document.getElementById('PrimerApellido').required = false;
        document.getElementById('SegundoApellido').required = false;
    }

}

function showLoader(){
    var tipoCliente = document.getElementsByName('tipoCliente')[0].value;
    var ramo = document.getElementsByName('ramo')[0].value;
    var razonSocial = document.getElementsByName('razonSocial')[0].value;
    var tipoDoc = document.getElementsByName('tipoDoc')[0].value;
    var identificacion = document.getElementsByName('identificacion')[0].value;
    var pais = document.getElementsByName('pais')[0].value;
    var depto = document.getElementsByName('depto')[0].value;
    var ciudad = document.getElementsByName('ciudad')[0].value;
    var dirResidencia = document.getElementsByName('dirResidencia')[0].value;
    var telefono = document.getElementsByName('telefono')[0].value;
    var email = document.getElementsByName('email')[0].value;

    if (tipoCliente != "" && ramo != "" && razonSocial != "" && tipoDoc != "" && identificacion != "" && pais!="" && depto!="" && ciudad!="" && dirResidencia!="" && telefono!="" && email!="") {
        document.getElementById('modal').click();
    }
    
}