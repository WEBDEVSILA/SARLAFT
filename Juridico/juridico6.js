var form = document.getElementById("form-id");
var option = document.getElementById('option');

document.getElementById("add").addEventListener("click", function () {
    var numId = document.getElementById("numId").value;
    var nombre =  document.getElementById("nombre").value;
    var razonSocial = document.getElementById("razonSocial").value;
    var tipoID = document.getElementById("tipoID").value;
    var id1 = document.getElementById("id1").value;
    var porcentP = document.getElementById("porcentP").value;        
    
    if(numId!="" && nombre!="" &&  razonSocial!="" && 
    tipoID!="" && id1!="" && 
    porcentP!=""){
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
