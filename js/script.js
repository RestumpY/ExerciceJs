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

function FahrenheitToCelsius(far){


    calcul = (far-32) * 5 / 9;
        
    document.getElementById('valeurFtoC').textContent = calcul;



}

function CelsiusToFahrenheit(cel){


    calcul = (cel*9/5) + 32;
    
    document.getElementById('valeurCtoF').textContent = calcul;


}


function GenerateurCitation(){

    var quote = [
        "There is a magnet in your heart that will attract true friends. That magnet is unselfishness, thinking of others first; when you learn to live for others, they will live for you.",
        "Never idealize others. They will never live up to your expectations.",
        "Quality is never an accident; it is always the result of intelligent effort.",
        "We don't stop playing because we grow old; we grow old because we stop playing.",
        "Love is the master key that opens the gates of happiness.",
        "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
        "He who controls others may be powerful, but he who has mastered himself is mightier still.",
        "The future is completely open, and we are writing it moment to moment.",
        "If you want your life to be more rewarding, you have to change the way you think.",
        "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
        "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
        "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that, so it goes on flying anyway.",
        "The world is a book, and those who do not travel read only a page."];

        alert(quote[getRandomInt(quote.length)]);

}


function moonMode(){

document.body.style = "background-color: black !important; color: white !important;"
    
}

function sunMode(){
    document.body.style = "background-color: white !important; color: black !important;"
}
