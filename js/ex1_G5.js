function veri(){
    var pesoKG = document.getElementById("peso").value;
    console.log(pesoKG)
    var precoprato = document.getElementById("prato").value;
    console.log(precoprato);
    
    let pre = pesoKG * precoprato;
    let para = document.createElement("p");
    let node = document.createTextNode("o preço total:  "+ pre +" reais");
    para.appendChild(node);
    let element = document.getElementById("pro");
    element.appendChild(para);
}