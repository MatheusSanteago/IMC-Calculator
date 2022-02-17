    
    function verificar() {
        var height = document.getElementsByTagName("input")[0].value;
        var weight = document.getElementsByTagName("input")[1].value;

        let showIMC =(IMC(height,weight).toFixed(2));

       
        if (showIMC <= 18.5) {
            document.getElementById("sobre").innerHTML = "Magreza"
        } else if (showIMC <= 24.9) {
            document.getElementById("sobre").innerHTML = "Normal"
        } else if (showIMC <= 29.9) {
            document.getElementById("sobre").innerHTML = "Sobrepeso"
        } else if  (showIMC <= 39.9) {
            document.getElementById("sobre").innerHTML = "Obesidade"
        } else if (showIMC >= 40){
            document.getElementById("sobre").innerHTML = "Obesidade Grave"
        } else {
            console.log("erro");
        }

        document.getElementById("result").innerHTML = showIMC;
        document.getElementById("xxx").innerHTML = "Seu IMC é ";

}

function IMC(altura,peso) {
    media = (peso/(altura*altura)*10000);
    return media
}
