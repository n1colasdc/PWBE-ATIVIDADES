
function par(){
let num = document.getElementById("numy").value;
console.log(num);
let Par;
let impar;
let res = num %2;
if( res == 0){
    final= ( num+ " É um número par" );
}else if(res !=0){
     final= (  num+ " É um número impar" )
}

let para = document.createElement("h3");
let node = document.createTextNode(final);
para.appendChild(node);
var element = document.getElementById("pro");
element.appendChild(para);

}