//function sumar(a, b) {
    //return a + b;
//}
//console.log(sumar(45, 2));
//lo que hace es que llama a la funcion sumar y le pasa los parametros 1 y 2 y lo imprime en la con//
// let a = prompt("Ingrese un numero");
// let b = prompt("Ingrese otro numero");
// let c = prompt("Ingrese otro numero");
// const sumar =(a,b,c)=> { return +a + +b + +c}
// ;
// console.log(sumar(a,b,c)); //
// let a = prompt("Ingrese un numero");

function callMenu(){
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6.Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares")
    );
    if (isNaN(nro_ejercicio)){
        alert("porfavor ingresa valores numericos"); 
    }
    else{
        switch (nro_ejercicio) {
            case 1:
                let valor1 = parseInt(prompt("ingrese el primer valor"));
                let valor2 = parseInt(prompt("ingrese el segundo valor"));
                alert(sumar(valor1, valor2));
                break;
            case 2:
                let nota1 = parseInt(prompt("ingrese la nota 1"));
                let nota2 = parseInt(prompt("ingrese la nota 2"));
                let nota3 = parseInt(prompt("ingrese la nota 3"));
                let nota4 = parseInt(prompt("ingrese la nota 4"));
                alert(promedio(nota1, nota2, nota3, nota4));
                break;
            case 3:
                let base = parseInt(prompt("ingrese la base del rectangulo"));
                let altura = parseInt(prompt("ingrese la altura del rectangulo"));
                alert(areaRectangulo(base, altura));
                break;
            case 4:
                let baseT = parseInt(prompt("ingrese la base del triangulo"));
                let alturaT = parseInt(prompt("ingrese la altura del triangulo"));
                alert(areaTriangulo(baseT, alturaT));
                break;
            case 5:
                let radio = parseInt(prompt("ingrese el radio del circulo"));
                alert(areaCirculo(radio));
                break;
            case 6:
                salarioSemanal();
                let horas = parseInt(prompt("ingrese las horas trabajadas"));
                let valorHora = parseInt(prompt("ingrese el valor de la hora"));
                alert(salarioSemanal(horas, valorHora));
                break;
            case 7:
                convertirPulgadas();
                let pulgadas = parseInt(prompt("ingrese las pulgadas"));
                alert(convertirPulgadas(pulgadas));
                break;
            case 8:
                convertirDolares();
                let dolares = parseInt(prompt("ingrese los soles"));
                alert(convertirDolares(dolares)+ " dolares");
                break;
            default:
                alert("porfavor ingresa valores numericos");
                break;
        }
    }
}

function sumar(a, b) {
    if(isNaN(a) || isNaN(b)){ return "porfavor ingresa valores numericos";}
else{ return a + b;}
}
function promedio(nota1, nota2, nota3, nota4) {
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){ return "porfavor ingresa valores numericos";}
else{ return (nota1 + nota2 + nota3 + nota4) / 4;}
}
function areaRectangulo(base, altura) {
    if(isNaN(base) || isNaN(altura)){ return "porfavor ingresa valores numericos";}
else{ return +base * +altura;}
}
function areaTriangulo(baseT, alturaT) {
    if(isNaN(baseT) || isNaN(alturaT)){ return "porfavor ingresa valores numericos";}
else{ return (+baseT * +alturaT )/ 2;}
}
function areaCirculo(radio) {
    if(isNaN(radio)){ return "porfavor ingresa valores numericos";}
else{ return Math.PI * Math.pow(radio, 2);}
}
function salarioSemanal(horas, valorHora) {
    if(isNaN(horas) || isNaN(valorHora)){ return "porfavor ingresa valores numericos";}
else{ return horas * valorHora;}
}
function convertirPulgadas(pulgadas) {
    if(isNaN(pulgadas)){ return "porfavor ingresa valores numericos";}
else{ return pulgadas * 2.54;}
}
function convertirDolares(dolares) {
    if(isNaN(dolares)){ return "porfavor ingresa valores numericos";}
else{ return dolares / 4;}
}
