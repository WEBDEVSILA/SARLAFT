var resultado = document.getElementById('resultadoInfolaft');

if(resultado.value != ''){
    var mostrarResultado = document.getElementById('mostrarResultado');
    var jsonRes = JSON.parse(resultado.value);
    if(jsonRes.content.length != 0){
        
        for(var j of jsonRes.content){
            
            var node = document.createElement('div');
            var title = document.createElement('h4');
            title.innerHTML="NOMBRE LISTA: "+j.nombreLista;
            title.className = "ajg-title-dark";
            var comments = document.createElement('h5');
            comments.innerHTML= "COMENTARIOS: " +j.comentarios;
            comments.className = "ajg-title-dark";
            var names = document.createElement('h5');
            names.innerHTML="NOMBRES: "+j.nombres;
            names.className = "ajg-title-dark";
            var sancionTitle = document.createElement('p');
            sancionTitle.innerHTML="SANCIÓN:"
            sancionTitle.className = "ajg-title-dark";
            var sancion = document.createElement('p');
            sancion.innerHTML = j.sancion;
            sancion.className = "ajg-title-dark";
            sancion.style.textAlign = "justify";
            var link = document.createElement('a');
            link.href = j.link;
            link.innerHTML = "Link";
            link.target = "_blank";


            node.appendChild(title);
            node.appendChild(comments);
            node.appendChild(names);
            node.appendChild(sancionTitle);
            node.appendChild(sancion);
            node.appendChild(link);
            node.style.borderWidth = "1px";
            node.style.marginBottom="10px";
            node.style.border = "solid";
            node.style.borderRadius = "10px";
            node.style.padding="20px";
            mostrarResultado.appendChild(node);
            
        }
    }

}

function scrollToResults(){
    var mostrarResultado = document.getElementById('resInfolaft');
    window.scrollTo(0,mostrarResultado.offsetTop-30); 
}


function ValidateSingleInput(oInput) {
    var _validFileExtensions = [".pdf"];    
    
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
    if(fileSize > 2000){
        alert("El archivo excede el peso máximo");
        oInput.value = "";
        return false;
    }

    return true;
}