function affichagetab(){
    var count = prompt("Combien de lignes souhaitez-vous ?");

document.write('<table border=2px width=30%>');
    for (let i = 0 ; i <= count ; i++){
        document.write('<tr><td>* </td><td>* </td><td>* </td></tr>');
    }
document.write('</table>');
}

function cdc(){
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient "+ chaine.length+" caracteres"+"<br>");
    document.write("La premiere lettre est "+ chaine.substr(0,1)+ "<br>");
}

function swich(){
    var color=prompt().toLowerCase ("Entrez une couleur :")
    switch (color)
    {
        case "rouge" : document.body.style.background = "red";
        break;
        case "bleu" : document.body.style.background = "blue";
        break;
        case "vert" : document.body.style.background = "green";
        break;

        default:alert("Couleur non définie")
    }
}

function connexion3(){
    var i = 0;
    do {
        var id= prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entre votre mot de passe");

        if (id == "admin" && mdp =="admin")
        {
            document.write("Bienvenue "+id +" !");
            break;
        }
        else
        alert("Accès Refusé");
    i +=1
    }

    while (i<3);
    if (i==3)
    alert("Délai dépassé");
}