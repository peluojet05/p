const desplazamientoC = document.getElementById("desplazamientoC");
const desplazamientoD = document.getElementById("desplazamientoD");
const textoC = document.getElementById("textoC");
const textoD = document.getElementById("textoD")
const textoCifrado = document.getElementById("cifrado")
const textoDescifrado = document.getElementById("descifrado");

function cifrado(){
    const textoIngresado = textoC.value;
    textoCifrado.value = textoIngresado.split('').map(c =>{
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        const valorDesplazamieto = parseInt(desplazamientoC.value);

        if(valorEntero >= 97 && valorEntero <= 122){
            valorEntero = ((valorEntero - 97 + valorDesplazamieto) % 26) + 97;
        } else if(valorEntero >= 48 && valorEntero <= 57){
            valorEntero = ((valorEntero - 48 + valorDesplazamieto) % 10) + 48;
        }

        let cifrado = String.fromCharCode(valorEntero)
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

textoC.addEventListener("keyup", cifrado);
desplazamientoC.addEventListener("change", cifrado);

function descifrado(){
    const textoIngresado = textoD.value;
    textoDescifrado.value = textoIngresado.split('').map(c =>{
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        const valorDesplazamieto = parseInt(desplazamientoD.value);

        if(valorEntero >= 97 && valorEntero <= 122){
            valorEntero = ((valorEntero - 97 - valorDesplazamieto + 26) % 26) + 97;
        } else if(valorEntero >= 48 && valorEntero <= 57){
            valorEntero = ((valorEntero - 48 - valorDesplazamieto + 10) % 10) + 48;
        }

        let descifrado = String.fromCharCode(valorEntero)
        return mayus ? descifrado.toUpperCase() : descifrado;
    }).join('');
}

textoD.addEventListener("keyup", descifrado);
desplazamientoD.addEventListener("change", descifrado);

function updateValueC(val) {
    document.getElementById('rangeValueC').innerHTML = val;
  }

function updateValueD(val) {
    document.getElementById('rangeValueD').innerHTML = val;
  }