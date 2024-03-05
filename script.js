 
let campo_texto    = document.getElementById('textoAencriptar');
let campo_mensaje  = document.getElementById('campoMensaje');
//let campo_mensaje  = document.querySelector("#campoMensaje");


const matriz_code = [
    ["e","enter"], //indice 0 
    ["i","imes"],  //indice 1
    ["a","ai"],    //indice 2
    ["o","ober"],  //indice 3
    ["u","ufat"],  //indice 4
];


function btnEncriptar(){
    campo_mensaje.value = encriptar(campo_texto.value);
}

function btnDesEncriptar(){
    //campo_texto.value = desencriptar(campo_mensaje.value);
    campo_mensaje.value = desencriptar(campo_texto.value);
}


function encriptar(fraseEncriptada) {
    for(let i=0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0],matriz_code[i][1]);
        }
    }
    return fraseEncriptada;
}


function desencriptar(fraseDesencriptada) {
    for(let i=0; i < matriz_code.length; i++) {
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(matriz_code[i][1],matriz_code[i][0]);
        }
    }
    return fraseDesencriptada;
}

function btnCopiar() {
    navigator.clipboard.writeText(campo_mensaje.value);    
    //alert("Texto copiado: " + campo_mensaje.value);
}