do {
	var compteur = Math.floor((Math.random()*10)+1);
	var trouve = prompt("Trouve le chiffre entre 1 et 10");
		if (trouve != compteur)
		{
			alert("Fail c'était " + compteur);
			var compteur;
		}
		else
		{
			alert("Gg " + compteur);
		}
}

while (compteur)

