var min = 1;
var sec = 59;
var voz = document.getElementById('mensajeVoz');
var cuestionario = document.getElementById('cuestionario');
var time = document.getElementById('time');

window.setInterval(function(){
    if(min != 0 || sec != 0){
        if(sec.toString().length == 1){
            time.innerHTML = min+':0'+sec;
        }else{
            time.innerHTML = min+':'+sec;
            if(sec == 29){
                voz.style.display = 'block';
            }
        }
        if(sec == 0){
            sec = 59;
            min--;
        }else{
            sec--;
        }
    }else{
        time.style.color = 'red';
        time.innerHTML = '0:00';
        cuestionario.style.display = 'block';
    }
},1000);

var boton = document.getElementById('backButton');
boton.addEventListener("click",function() {
    window.history.back();
  }
  ,false);