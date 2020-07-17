var form = document.getElementById("form-id");
var option = document.getElementById('option');

function del(id){
    document.getElementById("eliminarReg").value=id;    
    console.log("delete - "+document.getElementById("eliminarReg").value);
    option.value="delete";
    form.submit();
}

document.getElementById("add").addEventListener("click", function () {
    
    var tipoId = document.getElementById("tipoId").value;
    var numId =  document.getElementById("numId").value;
    var nombre = document.getElementById("nombre").value;
    var porcentaje = document.getElementById("porcentaje").value;
    var cotizaBolsa = document.getElementById("cotizaBolsa").value;
    var publicamenteExpuesta = document.getElementById("publicamenteExpuesta").value;
    var tributOtroPais = document.getElementById("tributOtroPais").value;
    
    
    if(tipoId!="" && numId.length > 4 &&  nombre!="" && 
    porcentaje!="" && cotizaBolsa!="" && 
    publicamenteExpuesta!="" && tributOtroPais!="" ){
        console.log("add");
        option.value="add";
        console.log(option);
        form.submit();
    }else{
        alert("Parece que hay campos sin finalizar!");
    }
  
});
