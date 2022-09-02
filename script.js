const texto=document.querySelector('#texto');
const btnEncriptar=document.querySelector('#botonE');
const btnDesencriptar=document.querySelector('#botonD');
const resultado=document.querySelector('#resultado');
const btnCopiar=document.querySelector('#botonC');
const advertencia=document.querySelector('#advertencia');
const icono=document.querySelector('#icono');
const imagen_advertencia=document.querySelector('#imagen_advertencia');

texto.addEventListener('keyup',validarTexto);
btnEncriptar.addEventListener('click',encriptar);
btnDesencriptar.addEventListener('click',desencriptar);
btnCopiar.addEventListener('click',copiar);

function validarTexto(){
    let abecedario = "abcdefghiyjklmnñopqrstuvwxyz !¡¿?,.:";
    let validacion = true;
    let longitudTexto = texto.value.trim().length;
    if(longitudTexto>0){
        for (let i = 0; i < texto.value.length; i++) {
            if(abecedario.indexOf(texto.value.charAt(i),0)==-1){
                validacion = false;
                break;
            }
        }
    } 

    if(validacion){
        advertencia.style.color = 'green';
        btnEncriptar.disabled = false;
        btnDesencriptar.disabled = false;
    }
    else{
        advertencia.style.color = 'red';
        btnEncriptar.disabled = true;
        btnDesencriptar.disabled = true;
    }
}

function encriptar(){
    if(texto.value.trim().length>0){
        let encriptador = ["e","i","a","o","u"];
        let palabrasclave = ["enter","imes","ai","ober","ufat"];
        let newstr = texto.value;
        for (let i = 0; i < palabrasclave.length; i++) {
            newstr = newstr.replaceAll(encriptador[i], palabrasclave[i]);
        }
        resultado.innerText = newstr;
        document.querySelector('#resultado__mensaje').style.display='none';
        document.querySelector('#resultado__copiar').style.display='flex';
    } else{
        document.querySelector('#resultado__mensaje').style.display='block';
        document.querySelector('#resultado__copiar').style.display='none';
    }
    
}

function desencriptar(){
    if(texto.value.trim().length>0){
        let palabrasclave = ["enter","imes","ai","ober","ufat"];
        let desencriptador = ["e","i","a","o","u"];
        let newstr = texto.value;
        for (let i = 0; i < palabrasclave.length; i++) {
            newstr = newstr.replaceAll(palabrasclave[i],desencriptador[i]);
        }
        resultado.innerText = newstr;
        document.querySelector('#resultado__mensaje').style.display='none';
        document.querySelector('#resultado__copiar').style.display='flex';
    } else{
        document.querySelector('#resultado__mensaje').style.display='block';
        document.querySelector('#resultado__copiar').style.display='none';
    }
    
}

function copiar(){
    resultado.select();
    document.execCommand('copy');
}


