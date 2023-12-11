function obter(){

    return JSON.parse(localStorage.getItem('restaurante')) || [];

}

function salvarDadosRestaurante(lista){

    localStorage.setItem('restaurante',JSON.stringify(lista));

}

let listaRestaurante = obter();

 

function veri(){

   let pesoKg = document.getElementById("peso").value;

   let preçoprato = document.getElementById ("prato").value;  

    console.log(pesoKg);

    console.log(preçoprato);

 

    if (pesoKg && preçoprato){

        let pre = pesoKg * preçoprato;

        /*let para = document.createElement ("p"); //criação de uma caixa vazia

        let node = document.createTextNode("o preço final é: "+ pre); // criação do conteudo

        para.appendChild(node); //adicionando o conteudo a caixa

        let element = document.getElementById("demo"); //criando uma ponte para o html

        element.appendChild(para);*/

        listaRestaurante.push({pesoKg,preçoprato,pre});

        salvarDadosRestaurante(listaRestaurante);

        //document.getElementById ("demo").innerHTML = pre;

        console.log(pre);

   

    }

    //lendo a lista

    let vazia = "";

    for (i = 0; i < listaRestaurante.length; i++){

        vazia += "pesoKg:  " + listaRestaurante[i].preçoprato  +

        "preço prato: " + listaRestaurante[i].pesoKg +

         "preço final: " + listaRestaurante[i].pre +"<br>";

    }

    document.getElementById ("demo").innerHTML = vazia;

}

 

 