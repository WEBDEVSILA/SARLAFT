var form = document.getElementById("form-id");
var option = document.getElementById('option');

function del(id){
    document.getElementById("eliminarReg").value=id;    
    console.log("delete - "+document.getElementById("eliminarReg").value);
    option.value="delete";
    form.submit();
}
document.getElementById("add").addEventListener("click", function () {
    var vinculo = document.getElementById("vinculo").value;
    var nombre =  document.getElementById("nombre").value;
    var tipoID = document.getElementById("tipoID").value;
    var numID = document.getElementById("numID").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var entidad = document.getElementById("entidad").value;
    var cargo = document.getElementById("cargo").value;
    var fechaDesvinc = document.getElementById("fechaDesvinc").value;
    
    
    if(vinculo!="" && nombre!="" &&  tipoID!="" && 
    numID!="" && nacionalidad!="" && 
    entidad!="" && cargo!="" && fechaDesvinc!=""){
        console.log("add");
        option.value="add";
        console.log(option);
        form.submit();
    }else{
        alert("Parece que hay campos sin llenar!!");
    }
  
});
