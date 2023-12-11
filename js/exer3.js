function promo(){
    let nome = document.getElementById("demo");
    let preco = document.getElementById("demo2");

    preco = Math.trunc(preco.value)

    let prom= preco + preco;

   
    let para = document.createElement("b");
    let node = document.createTextNode("promoção de "+nome.value+ " leve 2 pague "+ prom);
    para.appendChild(node);
    var element = document.getElementById("pro");
    element.appendChild(para);
}

