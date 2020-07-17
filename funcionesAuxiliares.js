
function upperCase(e,validateSpecial){    
    e.value = e.value.toString().toUpperCase();
    
    if(validateSpecial){
        replaceSpecialCharacters(e);
    }   
}

function validateNA(e){
    if(e.value == "NA" || e.value == "N/A" || e.value == "n/a" || e.value == "na" || e.value == " " || e.value == "  "){
        e.value = "";
    }
}

function validateBlank(e){        
    if(e.value == ""){
        e.value = "N/A";
    }
}

function replaceSpecialCharacters(e){
    e.value = e.value.split(/[`~!@#$%^&*()_|+\-¿¡=?°¬;:´'",.<>\{\}\[\]\\\/0123456789]/gi).join(""); 
}

function replaceSpecialCharactersNumber(e){
    e.value = e.value.split(/[`~!@#$%^&*()_|+\-¿¡=?°¬;:'e",.<>\{\}\[\]\\\/]/gi).join(""); 
    e.value = e.value.split(" ").join("");
    
}

function valMinLength(e,num,noti){    
    if(e.value.length < num){        
        //alert("Por favor termine de diligenciar el campo. (Longitud mínima "+num+" caracteres)");
        e.style.borderColor = "red";
        document.getElementById(noti).style.display = "block";        
    }else{
        e.style.borderColor = "#cccccc";
        document.getElementById(noti).style.display = "none";
    }
}

function makeRequired(element){
    var e = document.getElementById(element);
    e.required = true;
    console.log(element + " Required");
}

function unMakeRequired(element){
    var e = document.getElementById(element);
    e.required = false;
    e.value = "";
    console.log(element + " Not Required");
}

function validateCero(form,...list){
    var submit = true;
    for(var l of list){
        var v = document.getElementById(l);
        if(v.value == 0){
            submit = false;
            v.style.borderColor = "red";
        }else{
            v.style.borderColor = "#cccccc";
        }
    }
    if(submit){
        document.getElementById(form).submit();
    }else{
        console.log("Valor invalido");
        window.scrollTo(0,0);
    }
}

function validateFields(...fields){    
    var submit = true;   
    var elem = ""; 
    for(var v of fields){
        var arr = v.split("-");
        var name = arr[0];
        var num = arr[1];
        var field = document.getElementById(name);        
        if(field.value.length < num){
            submit = false;            
            field.style.borderColor = "red";
            if(elem == ""){
                elem = field.getBoundingClientRect();
                console.log(elem);
            }
        }
    }
    if(submit){
        console.log("Enviar");
        document.getElementById('submitButton').click();
    }else{
        if(elem.top <0){
            window.scrollTo(0,-elem.top);
        }else{
            window.scrollTo(0,elem.top);
        }
    }
}

function togglePanel(body,arrow){    
    if(arrow.className == 'fa fa-caret-down ajg-panel-button'){
        document.getElementById(body).className ='ajg-panel-body active';        
        arrow.className = 'fa fa-caret-up ajg-panel-button';                    
        window.scrollTo(0,arrow.offsetTop-30);        
    }else{
        document.getElementById(body).className ='ajg-panel-body';
        arrow.className = 'fa fa-caret-down ajg-panel-button'
    }    
}

function collapseAll(...sections){
    for(var s of sections){        
        document.getElementById(s).className = 'ajg-panel-body';
    }
    for(var i = 1; i<=sections.length; i++){
        document.getElementById('button'+i).className = 'fa fa-caret-down ajg-panel-button';
    }
    setTimeout(() => {
        window.scrollTo(0,0);
    }, 200);        
}

function expandAll(...sections){
    for(var s of sections){
        document.getElementById(s).className = 'ajg-panel-body active';
    }
    for(var i = 1; i<=sections.length; i++){
        document.getElementById('button'+i).className = 'fa fa-caret-up ajg-panel-button';
    }
}

function validateList(boton,...campos){
    var continuar = true;
    for(var c of campos){
        var campoAux = document.getElementById(c);
        if(campoAux.value != ""){
            continuar = false;
            campoAux.style.borderColor = 'red';
        }else{
            campoAux.style.borderColor = '#cccccc';
        }
    }
    if(continuar){
        var boton = document.getElementById(boton);
        boton.disabled = false;
        boton.click();
    }else{
        alert("Por favor verifique que no hayan datos sin guardar. (Para guardar oprima el botón +)");
        var boton = document.getElementById(boton);
        boton.disabled = true;
    }
}

function operInter(...archivos){
    var continuar = true;
    for(a of archivos){
        var arch = document.getElementById(a);
        if(arch.required == true){
            if(arch.value == ""){
                arch.style.borderStyle = 'solid';
                arch.style.borderColor = 'red';
                arch.style.borderWidth = '1px';
                continuar = false;

            }else{
                arch.style.borderStyle = 'none';
            }
        }
        
    }
    if(continuar){
        validateList('submitButton','tipoProd','numProd','entidad','monto','ciudad','pais','moneda');
    }else{
        validateList('','tipoProd','numProd','entidad','monto','ciudad','pais','moneda');
    }


}

function reclamSeg(...archivos){
    var continuar = true;
    for(a of archivos){
        var arch = document.getElementById(a);
        if(arch.required == true){
            if(arch.value == ""){
                arch.style.borderStyle = 'solid';
                arch.style.borderColor = 'red';
                arch.style.borderWidth = '1px';
                continuar = false;

            }else{
                arch.style.borderStyle = 'none';
            }
        }
        
    }
    if(continuar){
        validateList('submitButton','año','ramo','compañia','valor','resultado');
    }else{
        validateList('','año','ramo','compañia','valor','resultado');
    }
}

function aprobacion(value, form,resInput,entrevista){
    var entrev = document.getElementById(entrevista);
    if(entrev.value != ""){
        document.getElementById(resInput).value = value;
        document.getElementById(form).submit();
    }else{
        entrev.style.borderColor = 'red';
    }
    
}

function editarAprob(button){
    button.style.display = 'none';
    document.getElementById('botones').style.display = 'block';
    document.getElementById('entrev').disabled = false;
    document.getElementById('observaciones').disabled = false;
}

function cancelarAprob(){
    document.getElementById('editar').style.display = 'block';
    document.getElementById('botones').style.display = 'none';
    document.getElementById('entrev').disabled = true;
    document.getElementById('observaciones').disabled = true;
}

function reenviarCorreo(){
    document.getElementById('reenvio').submit();
}

