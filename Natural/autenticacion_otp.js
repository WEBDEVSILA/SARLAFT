var phoneList = document.getElementById('mobile_phone_list');
var landLineList = document.getElementById('land_line_list');
var select = document.getElementById('numeroSeleccionado');

var auxPhoneList = phoneList.value.split(',');
for(let p of auxPhoneList){
    if(p!=''){
        var option = document.createElement("option");
        option.text = p;
        option.value = p;
        select.appendChild(option);
    }
}

var auxLandLineList = landLineList.value.split(',');
for(let p of auxLandLineList){
    if(p!=''){
        var option = document.createElement("option");
        option.text = p;
        option.value = p;
        select.appendChild(option);
    }
}


function selectSMS(e){
    if(e.value!=''){
        if(e.value == 'SMS'){
            document.getElementById('numeroSeleccionado').value=phoneList[1];
        }
    }
}


function phoneTpe(e){
    if(e.value!=''){
        if(auxPhoneList.includes(e.value)){
            document.getElementById('phone_type').value = 'Mobile';
        }
        if(auxLandLineList.includes(e.value)){
            document.getElementById('phone_type').value = 'Landline';
            document.getElementById('metodo').value = 'Voice';
        }
    }

}