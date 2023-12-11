function obter(){

    return JSON.parse(localStorage.getItem('restaurante')) || [];

}

function salvarDados(lista){

    localStorage.setItem('restaurante',JSON.stringify(lista));

}




function calcular() {
    let preco = parseFloat (document.getElementById ("preco").value);

    for (let i = 1; i <= 10; i++) {
        const parce = (preco/i);

        const par = parce.toFixed(2);


        let para = document.createElement("h4");
        let node = document.createTextNode( i + "x"+ " de "+ " R$: " + par);
        para.appendChild(node);
        let element = document.getElementById("pro");
        element.appendChild(para);
        listaParcela.push({parce,par});
        salvarDados(listaParcela);
        console.log(par)
        
    }
}
let listaParcela = obter();


function historico(){
let vazia = " ";

console.log(vazia);

for (i = 0; i < listaParcela.length; i++){

    vazia += "parcelas: " + listaParcela[i].par +"<br>";
console.log(vazia);

    document.getElementById ("demo").innerHTML =vazia;


}
}

function limparHistorico(){
    localStorage.clear(listaParcela);
}

function visu(){
    let para = document.createElement("h4");
    let node = document.createTextNode("opções de pagamento: ");
    para.appendChild(node);
    let element = document.getElementById("prozin");
    element.appendChild(para);
}