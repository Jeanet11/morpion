var count = 0;

$(".case").click(function(){
	// on vérifie que la case n'est pas occupée
	if($(this).hasClass('vide')) {
		

		$(this).removeClass('vide').addClass('pleine');
		count++;
		//pour alterner les joueurs
		if(count%2 === 0) {

			$(this).html('<img   src="smile.jpg"/>');
			
		} else {
			$(this).html('<img   src="vache.png"/>');
		}
	}
	else {
		alert("Case occupée, rejoue !");
	}
});