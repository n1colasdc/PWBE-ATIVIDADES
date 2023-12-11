

function exibir_notas(){
let saque = document.getElementById("demo").value;
console.log(saque);
    
    let qnt100=saque/100;
    qnt100 = Math.trunc(qnt100); 
    console.log(qnt100);
    let resto= saque % 100;
    console.log(resto);

    let qnt50=resto/50;
    qnt50= Math.trunc(qnt50);
    console.log(qnt50);
    let rest = resto %50;
    console.log(rest);

    let qnt10 = rest/10;
    qnt10 = Math.trunc(qnt10);
    console.log(qnt10);
    let res = rest%10;
    console.log(res);

    if (qnt100 >= 0) {
        resulta100 = ( "A quantidade de notas de 100 é: "+ qnt100);
    } 
    if(qnt50 >= 0){
        resulta50 = ( "A quantidade de notas de 50 é: "+ qnt50 );
    }
    if(qnt10 >= 0){
        resulta10 = ("A quantidade de notas de 10 é: "+ qnt10);
    }else {
        document.write("sobrou: " +res);
    }
    
    let para = document.createElement("h3");
    let node = document.createTextNode(resulta100+resulta50+resulta10);
    para.appendChild(node);
    var element = document.getElementById("pro");
    element.appendChild(para);
   

}