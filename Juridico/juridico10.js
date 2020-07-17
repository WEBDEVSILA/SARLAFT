var form = document.getElementById("form-id");
var option = document.getElementById('option');
var numRecl = document.getElementById('numReclamaciones');
var radioSi = document.getElementById('radioSi');

if(radioSi.checked == true){
    makeRequiredJ('anyo','ramo','compañia','valor','resultado');
}else{
    unMakeRequiredJ('anyo','ramo','compañia','valor','resultado');
}

document.getElementById("add").addEventListener("click", function () {
    var anyo = document.getElementById("anyo").value;
    var ramo =  document.getElementById("ramo").value;
    var compañia = document.getElementById("compañia").value;
    var valor = document.getElementById("valor").value;
    var result = document.getElementById("resultado").value;
    
    
    if(anyo!="" && ramo!="" &&  compañia!="" && valor!="" && result!=""){
        console.log("add");
        option.value="add";
        console.log(option);
        form.submit();
    }else{
        alert("Parece que hay campos sin llenar!!");
    }
  
});
function del(id){
    document.getElementById("eliminarReg").value=id;    
    console.log("delete - "+document.getElementById("eliminarReg").value);
    option.value="delete";
    form.submit();
}

function makeRequiredJ(...list){        
    if(numRecl.value < 1){                
        for(var v of list){
            document.getElementById(v).required = true;
            document.getElementById(v).disabled = false;
        }    
    }
}

function unMakeRequiredJ(...list){    
    for(var v of list){        
        document.getElementById(v).required = false;
        document.getElementById(v).disabled = true;
        document.getElementById(v).value = "";
        document.getElementById(v).style.borderColor = "#cccccc";
    }
}

