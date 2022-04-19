let campoResultado= document.getElementById("resultado")
let carinha = document.getElementById("carinha")
let outputtitulo= document.getElementById("outputtitulo")
let outputp= document.getElementById("outputp")
let botaoCopiar =  document.getElementById("copiar");





function pegarValor(campo){
    return document.getElementById(campo).value;

}


function decriptar(){
    let texto = pegarValor("entrada");
    let resultado = texto.replace(/ai/gi,"a")
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u")
    campoResultado.style.display ="flex";
    outputtitulo.style.display ="none";
    outputp.style.display ="none";
    carinha.style.display ="none";
    botaoCopiar.style.display ="flex";
    campoResultado.innerHTML = resultado;
    
}

function encriptar(){
    let texto = pegarValor("entrada");
    let letras = texto.split("");
    let textoEncriptado = "";
    textoEncriptado += letras.map(letra=>{
        switch(letra){
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";    
            case "u":
                return "ufat";
            default:
            return letra;
        }
    }).join("");
    campoResultado.style.display ="flex";
    outputtitulo.style.display ="none";
    outputp.style.display ="none";
    carinha.style.display ="none";
    botaoCopiar.style.display ="flex";
    campoResultado.innerHTML = textoEncriptado;
}

function copiar(){
    navigator.clipboard.writeText(campoResultado.value);
}

botaoCopiar.onclick = copiar

let botaoDecriptar =  document.getElementById("decriptar");
botaoDecriptar.onclick = decriptar

let botaoEncriptar =  document.getElementById("encriptar");
botaoEncriptar.onclick = encriptar