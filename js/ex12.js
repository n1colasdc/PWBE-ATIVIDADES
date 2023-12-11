

function retornarTracos(){
    let nome= document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    
    
//let tracos=" ";
   //let tamanho = nome.lenght;
   let traco = nome.replace(/[A-a Z-z]/g,"-");

   //for (let i = 0; i <tamanho; i++) {
     // let letra = nome.charAt(i) !=" ";

    // if (letra !="a"||letra == "b"||letra == "c"||letra == "d"||letra == "e"||letra == "f"||letra == "g"||letra == "h"||letra == "i"||letra == "j"||letra == "k"||letra == "l"||letra == "m"||letra == "n"||letra == "o"||letra == "p"||letra == "q"||letra == "r"||letra == "s"||letra == "t"||letra == "u"||letra == "v" ||letra == "w"||letra == "x"||letra == "y"||letra == "z") {
    //   tracos+="-";
   // }else{
     //  tracos="";
    //  }

   //}

    let textoSaida= nome+ "<br>"+traco+ "<br>";
    textoSaida += "Categoria: "+ categoria(idade);

    let para = document.createElement("h4");
    let node = document.createTextNode(textoSaida);
    para.appendChild(node);
    let element = document.getElementById("pro");
    element.appendChild(para);;
   
}

    function categoria(idade){
        if (idade<=12) {
            return "categoria infatil";
        }else if (idade =>13 && idade<=18) {
            return "juvenil";
        }else if (idade >18) {
            return "adulto";
        }

    }