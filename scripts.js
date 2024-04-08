function soma() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
}

n1 = parseFloat(n1);
n2 = parseFloat(n2);

let soma = n1 + n2;
document.getElementById('resultado').innerText = ' a soma é igual a: ' + soma;