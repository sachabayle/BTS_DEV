function calcul_moyenne(){
    var n1= prompt("Donner la première note : ");
    var n2= prompt("Donner la deuxième note : ");
    var n3= prompt("Donner la troisième note : ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme : "+somme+ "<br>")
    var moyenne= somme/3;

    document.write("Voici la moyenne : "+moyenne+"<br>");

    if (moyenne<10) {
    document.write("Vous êtes redoublant");
    document.bgColor="red"}
    else {
    document.write("Vous êtes admis"); 
    document.bgColor="green"}
    }

function test_age(){
    var age= prompt("Indiquez votre âge : ");

    if (age<18) {
    document.write("<font size='8em' color='pink'>"+"Vous êtes mineur."+"</font>");
    document.bgColor="red";
    }
    else {
        document.write("<font size='8em' color='pink'>"+"Vous êtes majeur."+"</font>");
    document.bgColor="green";
    }
}

function simple_affichage(){
    var name = prompt("Indiquez votre prénom : ");
    var familyName = prompt("Indiquez votre nom : ");
    
    document.write('<div style="margin:auto; width:300px; border:2px solid black; ">');
    document.bgColor="grey"
    document.write("Bonjour " + name + " " + familyName + " !");
    document.write("</div>");
}

function test_couleur(){
    var c = prompt("Donner une couleur")
    if(c =="rouge" || c =="ROUGE"){
        document.body.style.background = "red";
    }
    else if (c == "bleu" || c == "BLEU"){
        document.body.style.background = "blue";
    }
    else(
        document.write("Couleur non comprise")
    )
}