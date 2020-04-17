function ajouterLigne(titre,nom) 
{
	var tableau = document.getElementById("tableau");

	var ligne = tableau.insertRow(-1);//on a ajouté une ligne

	var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
	colonne1.innerHTML += titre;//on y met le contenu de titre

	var colonne2 = ligne.insertCell(1);//on ajoute la seconde cellule
	colonne2.innerHTML += nom;
}
ajouterLigne('hello','world');
