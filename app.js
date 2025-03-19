///crea la variable tipo array
let amigos = [];

//añadir nombres a la lista

function agregarAmigo() {
 let inputAmigo = document.getElementById("amigo");
 let nombreAmigo = inputAmigo.value ;
   
    if (!nombreAmigo) {
      alert("Debes ingresar al menos un nombre");
      return ;
     }

 amigos.push(nombreAmigo);
 inputAmigo.value="";
 renderizarAmigos();
}

///Mostrar la lista en la pantalla

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML ="";

    for(let i = 0 ; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos [i];
        listaAmigos.appendChild(item);
    }
}

///sortear amigo secreto

function sortearAmigo() {
    if(amigos.length < 2){
        alert("Agregue más amigos para sortear");
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`El amigo sorteado es: ${amigoSorteado}`;
}
 