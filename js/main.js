const SaveButton = document.getElementById("mySaveButton");
const CancButton = document.getElementById("myCancelButton");


SaveButton.addEventListener('click', function() {
        let nome = document.getElementById("name");
        let cognome = document.getElementById("surname");
        let distance = document.getElementById("km_distance");
        let eta = document.getElementById("age");

        let tariffaIniziale = 0.21 * distance.value;
        let sconto; 
        if(eta.value<18){
            sconto = (20 * tariffaIniziale) / 100;
        }
    
        else if(eta.value>65){
            sconto = (40 * tariffaIniziale) / 100;
        }
        else{
            sconto = 0;
        }

        let tariffa =  0.21 * distance.value - sconto ;
        let tariffaFinale = tariffa.toFixed(2);
        console.log(tariffaFinale);

        document.getElementById("nomeP").innerHTML = nome.value + " " + cognome.value;
        document.getElementById("discount").innerHTML = sconto + " €";
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 20);
        document.getElementById("prezzoB").innerHTML = tariffaFinale;
    });

//STAMPA IN HTML
