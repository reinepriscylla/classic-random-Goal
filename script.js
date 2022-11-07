var paragraphe=document.querySelectorAll (."paragraphe ")
console.log(paragraphe);
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entier = entierAleatoire(1, 1000);
