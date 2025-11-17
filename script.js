let ej3_diametros = [];
let ej5_valores = [];
let ej5_noches = 0;

function ejercicio1() {
    const resultadoSpan = document.getElementById('ej1-resultado');
    const magnitud = parseFloat(document.getElementById('ej1-magnitud').value);
    
    if (isNaN(magnitud)) {
        resultadoSpan.innerHTML = "Error: Ingresa un número.";
        return; 
    }
    let clasificacion = "";
    if (magnitud < -20) { clasificacion = "Extremadamente brillante"; }
    else if (magnitud < -5) { clasificacion = "Muy brillante"; }
    else if (magnitud < 6) { clasificacion = "Brillante"; }
    else if (magnitud < 10) { clasificacion = "Débil"; }
    else { clasificacion = "No visible"; }
    resultadoSpan.innerHTML = `${magnitud}: ${clasificacion}.`;
}


function ejercicio2() {
    const resultadoSpan = document.getElementById('ej2-resultado');
    const input = document.getElementById('ej2-distancias').value; 
    
    if (input === "") {
        resultadoSpan.innerHTML = "Error: Ingresa distancias.";
        return;
    }
    const distanciasStr = input.split(',');
    let sumaTotal = 0;
    let conteoValido = 0;
    for (let i = 0; i < distanciasStr.length; i++) {
        const num = parseFloat(distanciasStr[i]);
        if (!isNaN(num)) {
            sumaTotal += num;
            conteoValido++;
        }
    }
    if (conteoValido === 0) {
        resultadoSpan.innerHTML = "Error: No se encontraron números válidos.";
        return;
    }
    const promedio = sumaTotal / conteoValido;
    resultadoSpan.innerHTML = `El promedio es: ${promedio.toFixed(2)} millones de km.`;
}



function ejercicio3() {
    const input = document.getElementById('ej3-diametro');
    const listaSpan = document.getElementById('ej3-lista');
    const resultadoSpan = document.getElementById('ej3-resultado');
    const diametro = parseFloat(input.value);

    resultadoSpan.className = ""; 

    if (diametro === 0) {
        let contadorGrandes = 0;
        let i = 0;
        
        while (i < ej3_diametros.length) {
            if (ej3_diametros[i] > 50) {
                contadorGrandes++;
            }
            i++;
        }
        
        resultadoSpan.innerHTML = `Se encontraron ${contadorGrandes} cráteres grandes (> 50 km).`;
        
        ej3_diametros = [];
        listaSpan.innerHTML = "Ninguno";
    } 
    else if (!isNaN(diametro) && diametro > 0) {
        ej3_diametros.push(diametro);
        listaSpan.innerHTML = ej3_diametros.join(', ');
        resultadoSpan.innerHTML = ""; 
    } 
    else {
        resultadoSpan.innerHTML = "Por favor, ingresa un número positivo o 0.";
        resultadoSpan.className = "Error";
    }

    input.value = "";
}


function ejercicio4() {
    const resultadoSpan = document.getElementById('ej4-resultado');
    const codigo = document.getElementById('ej4-codigo').value;
    let cuerpo = "";

    switch (codigo) {
        case "1": cuerpo = "Estrella"; break;
        case "2": cuerpo = "Planeta"; break;
        case "3": cuerpo = "Cometa"; break;
        case "4": cuerpo = "Asteroide"; break;
        case "5": cuerpo = "Galaxia"; break;
        default: cuerpo = "Código invalido";
    }
    resultadoSpan.innerHTML = cuerpo;
}


function ejercicio5() {
    const input = document.getElementById('ej5-lux');
    const feedbackSpan = document.getElementById('ej5-feedback');
    const resultadoSpan = document.getElementById('ej5-resultado');
    const valorInput = input.value.trim();

    if (valorInput.toLowerCase() === 'no') {
        
        if (ej5_valores.length > 0) {
            resultadoSpan.innerHTML = `Valores contados: ${ej5_valores.length}. <br>
                                     Noches profundas: ${ej5_noches}.`;
        } else {
            resultadoSpan.innerHTML = "No se registraron valores.";
        }
        
        feedbackSpan.innerHTML = "Completado.";
        feedbackSpan.className = "feedback-info"; 
        
        ej5_valores = [];
        ej5_noches = 0;
    } 
    else {
        const lux = parseFloat(valorInput);
        if (!isNaN(lux)) {
            ej5_valores.push(lux);
            
            if (lux < 5) {
                ej5_noches++;
                feedbackSpan.innerHTML = `¡Noche profunda! (Valor ${lux} lux registrado)`;
                feedbackSpan.className = "feedback-success"; 
            } else {
                feedbackSpan.innerHTML = `Valor ${lux} lux registrado.`;
                feedbackSpan.className = "feedback-info"; 
            }
            resultadoSpan.innerHTML = "..."; 
        } else {
            feedbackSpan.innerHTML = "Ingresa un número válido o escribe 'no'.";
            feedbackSpan.className = "feedback-error"; 
        }
    }
    
    input.value = "";
}