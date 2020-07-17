function direccion(select, input, dir){
    var fullDir = document.getElementById(dir);
    fullDir.innerHTML = "";    
    for(var i=1; i<=5; i++){
        document.getElementById(input+i).value = document.getElementById(input+i).value.split(/[`~!@#$%^&*()_|+\-¿¡=?°¬;:'",.<>\{\}\[\]\\\/]/gi).join(""); 
        fullDir.innerHTML += document.getElementById(select+i).value + " " + document.getElementById(input+i).value.toString().toUpperCase() + " ";
    }
    //fullDir.innerHTML = fullDir.innerHTML.split("-").join(" ");//.replaceAll("-"," ");
    
}

function guardarDir( cancel, fullD, dir){

    var fullDir = document.getElementById(fullD);
    var dirResidencia = document.getElementById(dir);
    dirResidencia.value = fullDir.innerHTML.trim();
    document.getElementById(cancel).click();
}

