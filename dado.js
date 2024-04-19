/*
    Enunciado: Tirar dados y que me informe si la suma de los dos es 8.
    1) Tirar dos dados
    2) Mostrar que numero salio en cada uno
    3) Mostrar la suma de los dos dados
    4) Mostrar si la suma es 8.
*/
let btnTirar = document.querySelector('#btnTirar');
let spanDado1 = document.querySelector('#dado1');
let spanDado2 = document.querySelector('#dado2');
let resultado = document.querySelector('.resultado');
//btnTirar.addEventListener('click', tirarDados)

function tirarDados(){
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    spanDado1.innerHTML = dado1;
    spanDado2.innerHTML = dado2;
    if(dado1 + dado2 == 8){
        resultado.innerHTML = 'Ganaste';
    }else{
        resultado.innerHTML = 'Perdiste';
    }
    
}


/*
Enunciado: Tirar dados y que me muestre una imagen del dado que salió.
1) Modificar el html y agregar imagenes en vez de span.
2) Tirar dados
3) Mostrar la imagen adecuada de cada dado
...
*/

btnTirar.addEventListener('click', tirarDadosConImagen)
function tirarDadosConImagen(){
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    spanDado1.src = `./imagenes/dado${dado1}.png`;
    spanDado2.src = "./imagenes/dado"+dado2+".png";
    if(dado1 + dado2 == 8){
        resultado.innerHTML = 'Ganaste';
    }else{
        resultado.innerHTML = 'Perdiste';
    }
}