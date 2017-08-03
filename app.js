//demander les noms des joueurs
var nomJoueur1 ="";
var nomJoueur2 =""; 

function nom()                                           
    {
       nomJoueur1=prompt('Saisissez le nom du joueur 1 :');

       nomJoueur2 = prompt("Saisissez le nom du joueur 2 :");
    }
nom();

var count = 0; // compteur de clics
var joueur1 = 1;
var joueur2 = 2;

//9 cases du tableau, O signifie que la case est vide
var array = ["0", "0","0", "0","0", "0","0", "0","0"];

function victoire(joueur, nomJoueur) {
			if(array[0] === joueur && array[1] === joueur && array[2]===joueur) {
				alert(nomJoueur + " a gagné");
			}
			else if(array[3] === joueur && array[4] === joueur && array[5]===joueur) {
				alert(nomJoueur + " a gagné");
			}
			else if(array[6] === joueur && array[7] === joueur && array[8]===joueur) {
				alert(nomJoueur + " a gagné");
			}
			else if(array[0] === joueur && array[3] === joueur && array[6]===joueur) {
				alert(nomJoueur + " a gagné");
			}
			else if(array[1] === joueur && array[4] === joueur && array[7]===joueur) {
				alert(nomJoueur + " a gagné");
			}
			else if(array[2] === joueur && array[5] === joueur && array[8]===joueur) {
				alert(nomJoueur + " a gagné");
			}
			else if(array[0] === joueur && array[4] === joueur && array[8]===joueur) {
				alert(nomJoueur + " a gagné");
			}
			else if(array[2] === joueur && array[4] === joueur && array[6]===joueur) {
				alert(nomJoueur + " a gagné");
			}

		}


$(".case").click(function(){

	var data = this.id - 1;
		
	if($(this).hasClass('vide')) {
		
		$(this).removeClass('vide').addClass('pleine');
		
		count++;
		//pour alterner les joueurs
		if(count%2 !== 0) {

			$(this).html('<img  class="smile" src="smile.jpg"/>');
			array[data] = joueur1;
			victoire(joueur1, nomJoueur1);
			
		} else {
			$(this).html('<img  class="vache" src="vache.png"/>');
			array[data] = joueur2;
			victoire(joueur2, nomJoueur2);
		}

	}
	else {
		alert("Case occupée, rejoue !");
	}
});

//pour recommencer une partie
$("button").click(function() {
	$("img").remove();
	$('.case').removeClass('pleine').addClass('vide');
	nom();

});
