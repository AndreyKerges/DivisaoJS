let numerador = prompt('Olá, digite o enumerador da divisão: ')
let divisor = prompt('Agora, digite o divisor da divisão: ')

let resultado = numerador / divisor

if (divisor == 0) {
    alert('Não é possível dividir por 0');
} else if (numerador == 0) {
    alert('O resultado é 0');
}
else {
    alert(`O resultado é ${resultado}`)
}