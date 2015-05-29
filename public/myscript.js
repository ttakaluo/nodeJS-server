window.onload = function(event){

    console.log(event);
    //Step1: Create the xhr object
    var xhr = new XMLHttpRequest();
    //Step2: Define callback to catch response
    xhr.onreadystatechange = ready;
    //step3: Define method, path etc.
    xhr.open("GET","/people", true);
    //step4: Send request
    xhr.send();
    
    function ready(){
     
        if(xhr.status == 200 && xhr.readyState == 4) {
         
            var data = JSON.parse(xhr.responseText);
            
            var parent = document.getElementById("persons");
                
                for(var i = 0; i < data.length; i++) {
                 
                    var liel = document.createElement("li");
                    liel.innerHTML = data[i].name + " " + data[i].email;
                    parent.appendChild(liel);
                }
        }
    }
}