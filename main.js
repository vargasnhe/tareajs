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
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6.Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9. Calcular edad \r\n 10. Calcular menor edad \r\n 11. Calcular bono \r\n 12. Calcular salario \r\n 13.Numero de Aprobados \r\n 14. Numero de Focos \r\n 15. Elecciones"));
    ;
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
            case 9:
                let nac = parseInt(prompt("Ingrese el año de nacimiento : "));
                alert(ej9_CalcularEdad(nac));
            break;
            case 10:
            alert(ej10_CalcularMenor());
            break;
            case 11:
            let years_work = parseInt(
            prompt("Ingrese los años trabajando en la empresa : ")
            );
            alert(ej11_CalcularBono(years_work));
            break;
            case 12:
            let salario = parseFloat(prompt("Ingrese el salario inicial : "));
            let incremento = parseInt(prompt("Ingrese el incremento : "));
            let years = parseInt(prompt("Ingrese los años a calcular : "));
            alert(ej12_CalcularSalario(salario, incremento, years));
            break;
            case 13:
            let nro_estudiantes = parseInt(
            prompt("Ingrese el nro. de estudiantes : ")
            );
            alert(ej13_CalcularAprobados(nro_estudiantes));
            break;
            case 14:
            let nro_focos = parseInt(prompt("Ingrese el nro. de focos : "));
            alert(ej14_CalcularColorFocos(nro_focos));
            break;
            case 15:
            let edad = parseInt(prompt("Ingrese su edad : "));
            let proxima_eleccion = parseInt(
            prompt("Ingrese el año de la proxima eleccion : ")
            );
            alert(ej15_CalcularEleccionValida(edad, proxima_eleccion));
            break;
            default:
            break;}
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
function ej9_CalcularEdad(nac) {
    let currentTime = new Date();
    let current_year = currentTime.getFullYear();
    if (isNaN(nac)) {
      return "Por favor ingrese valores numericos";
    } else {
      return "La edad es " + (current_year - nac);
    }
  }

  function ej10_CalcularMenor() {
    let personas = [
      { nombre: "Juan", edad: 35 },
      { nombre: "Maria", edad: 40 },
      { nombre: "Jose", edad: 20 },
    ];
    let menor_edad = personas[0].edad;
    let menor_nombre = personas[0].nombre;
    personas.forEach(function (keyValue, index) {
      if (index > 0) {
        if (keyValue.edad < menor_edad) {
          menor_edad = keyValue.edad;
          menor_nombre = keyValue.nombre;
        }
      }
    });
    return (
      "La persona de menor edad es : " +
      menor_nombre +
      " con " +
      menor_edad +
      " años."
    );
  }
  
  function ej11_CalcularBono(years) {
    let inc_bono = 100;
    let year_limit = 5;
    let bono_limit = 1000;
    if (isNaN(years)) {
      return "Por favor ingrese valores numericos";
    } else {
      if (years > 0 && years <= year_limit) {
        return "El bono asignado es : " + years * inc_bono;
      } else {
        return "El bono asignado es " + bono_limit;
      }
    }
  }
  
  function ej12_CalcularSalario(salario_inicial, incremento, years) {
    let resumen = "Salario Inicial : " + salario_inicial;
    let salario = 0;
    if (isNaN(salario) || isNaN(incremento) || isNaN(years)) {
      return "Por favor ingrese valores numericos";
    } else {
      for (let index = 1; index <= years; index++) {
        salario =
          salario_inicial + (salario_inicial * (incremento * index)) / 100;
        resumen += " Salario Año " + index + " : " + salario;
      }
      return resumen;
    }
  }
  
  function ej13_CalcularAprobados(nro_estudiantes) {
    let estudiante = [];
    let nota_aprobatoria = 11;
    let aprobados = 0;
    let desaprobados = 0;
    if (isNaN(nro_estudiantes)) {
      return "Por favor ingrese valores numericos";
    } else {
      for (let index = 0; index < nro_estudiantes; index++) {
        let nombre = prompt("Ingrese el nombre del estudiante : ");
        let nota = prompt("Ingrese la edad del estudiante : ");
        estudiante.push({ nombre: nombre, nota: nota });
      }
  
      for (var property in estudiante) {
        if (estudiante[property].nota > nota_aprobatoria) {
          aprobados++;
        } else {
          desaprobados++;
        }
      }
      return (
        "Estudiantes Aprobados : " +
        aprobados +
        " - Desaprobados : " +
        desaprobados
      );
    }
  }
  
  function ej14_CalcularColorFocos(nro_focos) {
    let focos = [];
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    if (isNaN(nro_focos)) {
      return "Por favor ingrese valores numericos";
    } else {
      for (let index = 0; index < nro_focos; index++) {
        let color = prompt("Ingrese el color del foco : ");
        focos.push({ color: color });
      }
  
      for (var property in focos) {
        switch (focos[property].color) {
          case "verde":
            verde++;
            break;
          case "blanco":
            blanco++;
            break;
          case "rojo":
            rojo++;
            break;
          default:
            break;
        }
      }
      return (
        "Color de Focos Verdes : " +
        verde +
        " - Rojos : " +
        rojo +
        " - Blancos : " +
        blanco
      );
    }
  }
  
  function ej15_CalcularEleccionValida(edad, proxima_eleccion) {
    let currentTime = new Date();
    let current_year = currentTime.getFullYear();
    let edad_limite = 70;
    if (isNaN(edad) || isNaN(proxima_eleccion)) {
      return "Por favor ingrese valores numericos";
    } else {
      if (edad + (proxima_eleccion - current_year) > edad_limite) {
        return "No podra votar";
      } else {
        return "Si podra votar";
      }
    }
  }