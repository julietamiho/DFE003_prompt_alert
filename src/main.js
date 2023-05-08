let numero = prompt("informe o numero")
let questao01 = document.querySelector ("#questao1")
questao01.innerHTML = `O resultado é: ${ numero * 2}`

let valorJantar = parseInt(prompt("Qual valor da conta ? "))
const valorGarcom = valorJantar * 0.10
let questao02 = document.querySelector("#questao02"); // Pega id da tag div de forma dinamica
questao02.innerHTML = `O valor da Jantar é: ${valorJantar}`

let valorTotal = parseFloat(prompt("Qual valor total da conta ?"))
const qtdClientes = parseInt(prompt("Quantos clientes que vão pagar a conta?"))
const valorPorCliente = valorTotal/ qtdClientes
let questao03 = document.querySelector("#questao03")
questao03.innerHTML = `Cada cliente pagará R$ ${valorPorCliente.toFixed(2)}`