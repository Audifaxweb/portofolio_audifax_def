//////////////////// TP JS - Intéraction ////////////////////


/*
Faire les exercices directement dans le fichier JS sans toucher au fichier CSS.
*/



//////////////////// Exercice 1 ////////////////////
/*
Faites en sorte que lorsque l'on clique sur le bouton, la div bleu devienne verte
Attention : ne pas utiliser de classe CSS, vous devez modifier le style de la div directement en JS sans toucher au fichier css
*/

// Votre code ici
document.querySelector('#exo1Btn').addEventListener('click', ()=>{
    document.querySelector('#exo1Div').style.backgroundColor = 'green';
});




//////////////////// Exercice 2 ////////////////////
/*
Faire en sorte que lorsque l'on clique sur l'image, celle ci augmente de taille à raison de 20 pixels à chaque clic.
Attention : ne pas utiliser de classe CSS, vous devez modifier la taille de l'image directement en JS sans toucher au fichier css
Aide : 
- Voir getComputedStyle (attention retourne une chaine de caractère)
- Pensez à remettre 'px' ensuite en utilisant la concaténation
*/

// Votre code ici

let logo = document.querySelector('#exo2Logo');
logo.addEventListener('click', ()=>{
    let styleLogo = getComputedStyle(logo);
    // console.log(styleLogo.width);
    let newWidth = parseInt(styleLogo.width) + 20;
    console.log(newWidth);
    logo.style.width = `${newWidth}px`;
});




//////////////////// Exercice 3 ////////////////////
/*
Faire en sorte que lorsque l'input color est modifié, le background de la section qui a pour id="exo3" change en fonction de la couleur choisie
Attention : ne pas utiliser de classe CSS, vous devez faire les modifications directement en JS sans toucher au fichier css
*/

// Votre code ici
let inputElt = document.querySelector('#exo3Input');
inputElt.addEventListener('input', ()=>{
    // console.log(inputElt.value);
    document.querySelector('#exo3').style.backgroundColor = inputElt.value;
});





//////////////////// Exercice 4 ////////////////////

let etudiants = ['Anne', 'Audifax', 'Baptiste', 'Jean-François', 'Jordan', 'Julie', 'Kamel', 'Laure', 'Marie', 'Michaël', 'Raphaël', 'Rémy', 'Sonia', 'Sylvain', 'Nicolas'];

/* Exo 4 - A
Soit le tableau précedent, grâce à une boucle, afficher les éléments 1 par 1 dans la console mais en Majuscule
*/
console.log('Exo 4 - A --------');

// Votre code ici
for(let etudiant of etudiants){
    console.log(etudiant.toUpperCase());
}


/* Exo 4 - B
Grâce à une fonction prédefinie, supprimer votre prénom du tableau, et réafficher les élements 1 par 1 dans la console
*/
console.log('Exo 4 - B --------');

// Votre code ici
etudiants.splice(etudiants.indexOf('Audifax'), 1);
// console.log(etudiants);
for(let item of etudiants){
    console.log(item);
}