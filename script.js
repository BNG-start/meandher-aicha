let clickCount = 0; 
let noButton = document.getElementById("noButton");
let yesButton = document.getElementById("yesButton");
let messagesDiv = document.getElementById("messages");
let surpriseMessage = document.getElementById("surpriseMessage");
let poemDiv = document.getElementById("poem");

const messages = [
    "T'es sûr ?",
    "Mais je t'aimeee ?",
    "Tu veux vraiment dire non ?",
    "J'ai du mal à y croire !",
    "Tu ne veux vraiment pas ?",
    "Regarde, je suis triste... :(",
    "Allez, ne sois pas comme ça !"
];

noButton.addEventListener("click", function() {
    clickCount++;

    // Afficher un message amusant
    if (clickCount <= 7) {
        messagesDiv.textContent = messages[clickCount - 1];
        
        // Réduire progressivement la taille du bouton "Non"
        let noButtonSize = 1 - (clickCount * 0.1);
        let yesButtonSize = 1 + (clickCount * 0.1);
        noButton.style.transform = `scale(${noButtonSize})`;
        yesButton.style.transform = `scale(${yesButtonSize})`;

        // Déplacer le bouton "Non" derrière le bouton "Oui"
        let offset = clickCount * 10; // L'effet d'offset pour faire "cacher" le bouton non
        noButton.style.zIndex = 1; // Garder le bouton non derrière
        yesButton.style.zIndex = 2; // Garder le bouton oui devant
        noButton.style.transform += ` translateX(-${offset}px)`; // Déplacement horizontal du bouton "Non"

        // Si le bouton "Non" a été réduit après 7 clics, on le cache
        if (clickCount === 7) {
            noButton.style.display = "none"; // Cacher le bouton "Non" après 7 clics
        }
    }

    poemDiv.classList.add("hidden"); // Le poème reste caché ici
});

yesButton.addEventListener("click", function() {
    surpriseMessage.textContent = "Youpiii, on se réconcilie ?";
    surpriseMessage.style.display = "block";

    // Le poème est caché sur cette page (index.html)
    poemDiv.style.display = "none"; 

    // Redirection vers la page poème_pour_toi.html après un délai de 3 secondes
    setTimeout(() => {
        window.location.href = "poeme_pour_toi.html"; // Rediriger vers la page poème
    }, 3000); // Redirection après 3 secondes
});
