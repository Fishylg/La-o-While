num = parseInt(prompt("Digite um número: "))
soma = 0
while (num > 0) {
    soma += num % 10
    num = Math.floor(num / 10)
}
console.log(`A soma dos dígitos é: ${soma}`)