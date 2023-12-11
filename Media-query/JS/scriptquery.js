    const cont = document.getElementById("cont");
    const incrementoButton= document.getElementById("incremento");
    const decrementoButton= document.getElementById("decremento");

    let contador= 0;

function atualizar(){
    cont.textContent=contador;

}

incrementoButton.addEventListener("click",function(){
    contador++
    atualizar();
})

decrementoButton.addEventListener("click",function(){
    if (contador > 0) {
        contador --;
        atualizar();
    }
})

atualizar();



