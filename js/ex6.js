function refe(){
    let nome = document.getElementById("nom").value;

    maius=  nome.toUpperCase();
    //console.log(maius);

     let nom = maius.split(" ");
     //console.log(nom);
   
     tam = nom.length;
     //console.log = (tam);

    
     

   for (let i = 0; i < tam -1; i++) {
    let ar = nom [i-1];
    console.log(ar);
   }


}