let num = parseInt(document.getElementById("num").value);

function obter(){
    return localStorage.getItem('resultado') || [];
}

 function salvarDados(valor){
    localStorage.setItem('resultado', JSON.stringify(valor))
 }

let reTabuada = obter();


console.log(num);
console.log(typeof(num));

function tabuada(){
    let num = parseInt(document.getElementById("num").value);


    for (let i = 1; i <=10 ; i++) {
        let resul = num * i;
        let re = "ultima tabuada foi do: " +num;

        console.log(num);
      
        let para = document.createElement("h4");
        let node = document.createTextNode(num +" x "+ i+ " = "+ resul);
        para.appendChild(node);
        let element = document.getElementById("pro");
        element.appendChild(para);;

       

        salvarDados(re);
        
    }

    
}

console.log(obter());
