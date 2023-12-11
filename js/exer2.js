var dados=[];

function botao(){
   var pessoas = prompt("adicionar nome");
    var email= prompt("adicionar email");
    dados= pessoas + email;

    var para = document.createElement("li");
    var node = document.createTextNode("Nome: "+ pessoas+ " Email: "+ email);
    para.appendChild(node);
    var element = document.getElementById("list");
    element.appendChild(para);
}
