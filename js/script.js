//Exercice 1

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function MotDePasseCrypte() {

    var text = document.getElementById('mdp');

    var char = "abcdefghijklmnopqrstuvwxyz&é'(-è_çà)1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var maj = 0;
    var min = 0;
    var spec = 0;
    var number = 0;

    var taille = 0;

    var mdp = '';

    while (maj == 0 || min == 0 || spec == 0 || number == 0 || taille < 10) {

        var i = getRandomInt(72);

        mdp = mdp + char[i];

        if (i <= 25) min = 1;
        if (i >= 26 && i <= 35) spec = 1;
        if (i >= 36 && i <= 45) number = 1;
        if (i >= 46) maj = 1;


        taille++;
    }
    text.textContent = "Voici le mdp : " + mdp;
}


//Exercice 2

function FahrenheitToCelsius(far) {


    calcul = (far - 32) * 5 / 9;

    document.getElementById('valeurFtoC').textContent = calcul;



}

function CelsiusToFahrenheit(cel) {


    calcul = (cel * 9 / 5) + 32;

    document.getElementById('valeurCtoF').textContent = calcul;


}


function GenerateurCitation() {

    fetch("https://api.quotable.io/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            alert(data['content']);
        });

}


function moonMode() {

    document.body.style = "background-color: black !important; color: white !important;"

}

function sunMode() {
    document.body.style = "background-color: white !important; color: black !important;"
}