const textoInput = document.getElementById('input');
const textoOutput = document.getElementById('output');
//const container = document.querySelector('container_inicial');


function criptografar() {
    let texto = textoInput.value;

    caracteresExcecao();

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
    caracteresExcecao();
    
    let resultadoDescriptografar = texto.replaceAll(/enter/g, "e").replaceAll(/imes/g, "i").replaceAll(/ai/g, "a").replaceAll(/ober/g, "o").replaceAll(/ufat/g, "u");

    return resultadoDescriptografar;
}

function btnDescriptografar() {
    document.getElementById("container_inicial").style.display = "none"
    document.getElementById("output").removeAttribute('hidden');
    document.getElementById("copiar").removeAttribute('hidden');
    
    
    const textoDescriptado = descriptografar(textoInput.value);
    

    document.getElementById('output').innerHTML = textoDescriptado;

    document.getElementById("output").setAttribute("disabled", "disabled"); // remove o atributo disable do textarea output

    limparCampo();
    
}



function limparCampo() {
    let texto = document.querySelector('textarea');
    texto.value = '';

}
    

function btnCopy() {
    document.getElementById("output").removeAttribute("disabled"); //remove atributo disable

    let textoCopiado = document.getElementById('output');
    textoCopiado.select();
    document.execCommand('copy'); 
    document.getElementById("output").setAttribute("disabled", "disabled"); // retorna o atributo disable

   
    
}



function caracteresExcecao() {

const regex = new RegExp('[/^a-z0-9\s/]+$');
    const text = textoInput.value;

      
        if(!regex.test(text)){
            textoOutput.value = alert("Atenção! Não são permitidos caracteres especiais e ou letras maiúsculas");
            textoOutput.value = ''; // tira o valor

            window.location.reload(); //atualiza a página

            return false;

        } else {
            return true;
        }
        
   
    
}




