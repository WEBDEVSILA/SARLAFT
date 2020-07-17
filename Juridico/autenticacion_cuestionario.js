var questionText = document.getElementById('questions').value;
var htmlQuestion = document.getElementById('question');
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(questionText,'text/xml');
var questionNum = -1;
var selected = true;

nextQuestion();


function nextQuestion(){
    if(selected){
        document.getElementById('alerta').style.display = 'none';
        questionNum++;
        var question = xmlDoc.getElementsByTagName('Question')[questionNum].getAttribute('Text');
        htmlQuestion.innerHTML = question;
        var len = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer').length;
        document.getElementById('numb').innerHTML = questionNum+1;
        document.getElementById('count').innerHTML = questionNum+1;
        while(document.getElementById('answers').firstChild){
            document.getElementById('answers').removeChild(document.getElementById('answers').firstChild);
        }
        question = xmlDoc.getElementsByTagName('Question')[questionNum].getAttribute('Text');
        htmlQuestion.innerHTML = question;
        len = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer').length;
        for(var i = 0; i < len; i++){
            var node = document.createElement('div');
            node.className = 'radio-custom radio-primary';
            var inputNode = document.createElement('input');
            var labelNode = document.createElement('label');
            inputNode.value = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].childNodes[0].nodeValue;
            inputNode.type = 'radio';
            inputNode.name = 'question'+questionNum;
            inputNode.id = 'answer'+i;
            if(xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].getAttribute('IsSelected') == "true"){
                inputNode.checked = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].getAttribute('IsSelected');
            }
            inputNode.onclick = function(){selectOption(this)};
            labelNode.innerHTML = inputNode.value;
            labelNode.setAttribute('for', 'answer'+i);
            
    
            node.appendChild(inputNode);
            node.appendChild(labelNode);
            document.getElementById('answers').appendChild(node);
        }
        if(questionNum+1 == 5){
            document.getElementById('button').style.display = 'none';
            document.getElementById('submitButton').style.display = 'block';
        }
        if(questionNum > 0){
            document.getElementById('backbutton').style.display = 'block';
        }

    }else{
        document.getElementById('alerta').style.display = 'block';
    }
    selected = false;
}


function lastQuestion(){
    if(questionNum > 0){
        document.getElementById('alerta').style.display = 'none';
        questionNum--;
        var question = xmlDoc.getElementsByTagName('Question')[questionNum].getAttribute('Text');
        htmlQuestion.innerHTML = question;
        var len = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer').length;
        document.getElementById('numb').innerHTML = questionNum+1;
        document.getElementById('count').innerHTML = questionNum+1;
        while(document.getElementById('answers').firstChild){
            document.getElementById('answers').removeChild(document.getElementById('answers').firstChild);
        }
        question = xmlDoc.getElementsByTagName('Question')[questionNum].getAttribute('Text');
        htmlQuestion.innerHTML = question;
        len = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer').length;
        for(var i = 0; i < len; i++){
            var node = document.createElement('div');
            node.className = 'radio-custom radio-primary';
            var inputNode = document.createElement('input');
            var labelNode = document.createElement('label');
            inputNode.value = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].childNodes[0].nodeValue;
            if(xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].getAttribute('IsSelected') == "true"){
                inputNode.checked = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].getAttribute('IsSelected');
            }
            inputNode.type = 'radio';
            inputNode.name = 'question'+questionNum;
            inputNode.id = 'answer'+i;
            inputNode.onclick = function(){selectOption(this)};
            labelNode.innerHTML = inputNode.value;
            labelNode.setAttribute('for', 'answer'+i);
            
    
            node.appendChild(inputNode);
            node.appendChild(labelNode);
            document.getElementById('answers').appendChild(node);
        }
        if(questionNum+1 == 5){
            document.getElementById('button').style.display = 'none';
            document.getElementById('submitButton').style.display = 'block';
        }else{
            document.getElementById('button').style.display = 'block';
            document.getElementById('submitButton').style.display = 'none';
        }
        if(questionNum < 1){
            document.getElementById('backbutton').style.display = 'none';
        }
    }

}


function finalQuestion(){
    if(selected){
        document.getElementById('alerta').style.display = 'none';
        
        console.log(document.getElementById('respuestas').value );
        document.getElementById('submitForm').submit();
    }else{
        document.getElementById('alerta').style.display = 'block';
    }
}

function selectOption(e){
    selected = true;
    var len = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer').length;
    var pos = -1;
    for(var i = 0; i<len; i++){
        xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].setAttribute('IsSelected',false);
        var ans = xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].childNodes[0].nodeValue;
        if(ans == e.value){
            xmlDoc.getElementsByTagName('Question')[questionNum].getElementsByTagName('Answer')[i].setAttribute('IsSelected',true);
        }
    }
    document.getElementById('respuestas').value = new XMLSerializer().serializeToString(xmlDoc);
    //console.log(document.getElementById('respuestas').value );
}


