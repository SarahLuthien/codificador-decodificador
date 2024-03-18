const textoInput = document.getElementById('input');
const textoOutput = document.getElementById('output');
//const container = document.querySelector('container_inicial');



function criptografar() {
    let texto = textoInput.value;

    texto = texto.toLowerCase();
    
    let resultadoCriptografar = texto.replaceAll(/e/g, "enter").replaceAll(/i/g, "imes").replaceAll(/a/g, "ai").replaceAll(/o/g, "ober").replaceAll(/u/g, "ufat");
    
    return resultadoCriptografar;

}

function btnCriptografar() {
    document.getElementById("container_inicial").style.display = "none";
    document.getElementById("output").removeAttribute('hidden');
    document.getElementById("copiar").removeAttribute('hidden');

    const textoCriptado = criptografar(textoInput.value);
    
    document.getElementById('output').innerHTML = textoCriptado;

    limparCampo();

}




function descriptografar() {
    let texto = textoInput.value;

    texto = texto.toLowerCase();
    
    let resultadoDescriptografar = texto.replaceAll(/enter/g, "e").replaceAll(/imes/g, "i").replaceAll(/ai/g, "a").replaceAll(/ober/g, "o").replaceAll(/ufat/g, "u");

    return resultadoDescriptografar;
}

function btnDescriptografar() {
    document.getElementById("container_inicial").style.display = "none"
    document.getElementById("output").removeAttribute('hidden');
    document.getElementById("copiar").removeAttribute('hidden');
    
    const textoDescriptado = descriptografar(textoInput.value);
    
    document.getElementById('output').innerHTML = textoDescriptado;

    limparCampo();
    
}



function limparCampo() {
    let texto = document.querySelector('textarea');
    texto.value = '';

}
    

function btnCopy() {
    let textoCopiado = document.getElementById('output');
    textoCopiado.select();
    document.execCommand('copy'); 
    console.log("Texto copiado com sucesso!");
}



function limparCampo() {
    let texto = document.querySelector('textarea'); // OBS: aqui vai ser 'input'?? seria o ID ou a propriedade?? realizar teste
    texto.value = '';
  }


  // 