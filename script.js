function converter(){
    var caminho_binario = document.getElementById('num_bin');
    var caminho_decimal = document.getElementById('num_dec');

    if(validar(caminho_binario.value)){
        var decimal = parseInt(caminho_binario.value, 2);
        var binario = decimal.toString(2);
        caminho_binario.value = binario;
        caminho_decimal.value = decimal;
    } else {
        alert("Digite um número na base binária!");
        caminho_binario.value = '';
        caminho_decimal.value = '';
    }
}

function validar(binario) {
    var padrao = /[^0-1]+/;
    
    if(padrao.test(binario) || binario.length == 0) {
        return false;
    } else {
        return true;
    }
}