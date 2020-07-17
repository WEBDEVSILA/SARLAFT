var form = document.getElementById("form-id");
var option = document.getElementById('option');

document.getElementById("add").addEventListener("click", function () {
    var tipoProd = document.getElementById("tipoProd").value;
    var numProd =  document.getElementById("numProd").value;
    var entidad = document.getElementById("entidad").value;
    var monto = document.getElementById("monto").value;
    var ciudad = document.getElementById("ciudad").value;
    var pais = document.getElementById("pais").value;        
    var moneda = document.getElementById("moneda").value;        
    
    if(tipoProd!="" && numProd!="" &&  entidad!="" && 
    monto!="" && ciudad!="" && 
    pais!="" && moneda!=""){
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



var _validFileExtensions = [".pdf"];    
function ValidateSingleInput(oInput) {
    
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }
            if (!blnValid) {
                alert("Formato incorrecto, las extensiones permitidas son: " + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
        }
    }
    var fileSize = oInput.files[0].size/1000;
    if(fileSize > 5000){
        alert("El archivo excede el peso máximo");
        oInput.value = "";
        return false;
    }

    return true;
}