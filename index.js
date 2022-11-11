const parrafoInicial = document.getElementById("parrafoInicial");

parrafoInicial.onclick = function() {
    cambiarColorAleatorio()
};

function cambiarColorAleatorio(){

    const colores = [
        "red",
        "blue",
        "cyan",
        "black",
        "skyblue"
    ];
    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}

/*
TIPOS DE VARIABLES (DATOS)

var -> Modificable, scope global - NO SE RECOMIENDA
let -> Modificable, scope limitado - RECOMENDADA USAR
const -> Constante (no modificable), scope global

*/ 



/* 
CASES

PascalCase - Clases - JAVA

camelCase - variables, funciones, atributos. - JavaScript
    variable -> parrafoInicia =
    funcion -> parrafoInicial()
    atributo -> parrafoInicial

snake_case - Python , JavaScript
    Variables y Funciones

CASE - Deben ser constantes

*/
/* Crenado un evento */
/* parrafoInicial.onclick = function() {
    accion()
};

function accion(){
    parrafoInicial.style.color = "red"
}; */