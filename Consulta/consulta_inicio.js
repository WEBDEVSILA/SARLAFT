var form = document.getElementById("search");
var option = document.getElementById("option");
var tabla = document.getElementById("tabla");
var lista = document.getElementById("lista");
var filters = document.getElementById("filters");


function submit(id){
    alert(id);
}

function buscar(action){    
    if(action == "all"){
        option.value = "all";
    }
    form.submit();
}

function openView(id){    
    var table = document.getElementById("tableID");    
    table.value = id;    
    document.getElementById("detallesSarlaft").submit();

}