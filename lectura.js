var file = document.getElementById('file');
console.log(file);

function loadFileAsText(){
    console.log("aca");
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var list = textFromFileLoaded.split('\n');
        //console.log(list);
        var result="";
        for(var l of list){            
            var aux = l.split('\t');            
            if(aux[2]!=null){                
                aux[2].replace(/\n/g, " ");
            }
            result += "codCiiu.set('"+aux[1]+"','"+aux[2]+"');\n";
        }
        document.getElementById("inputTextToSave").innerHTML = result;
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
 }