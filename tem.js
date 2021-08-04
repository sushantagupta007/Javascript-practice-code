//Celcius to Farenhite
function celciustoFarenhite(celcius){
    let farenhite;
    farenhite = (celcius*(9/5))+32;
    return farenhite;
}

let Farenhite= celciustoFarenhite(1); 
console.log("Farehite temp is", Farenhite);  

//Farenhite to celcius
function FarenhitetoCelcius(Farenhite){
    let celcius;
    celcius = (Farenhite-32)*(5/9);
    return celcius;
}

let Celcius= FarenhitetoCelcius(33.8); 
console.log("Celcius temp is", Celcius);  