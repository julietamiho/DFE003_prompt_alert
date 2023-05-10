// Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.
let numero = prompt("informe o numero")
const convertenumero = parseInt(numero) 
console.log(convertenumero * 2)
alert(convertenumero * 2)

// Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto 
// pela conta junto com a taxa de atendimento do garçom.
const contaJantar = prompt("escreva o valor da sua conta")
const taxaGarcom = parseInt(contaJantar * 0.10)
console.log(taxaGarcom)
const valorTotal = parseInt(contaJantar) + taxaGarcom
console.log(valorTotal)
alert("O valor total do jantar é: R$ " + valorTotal.toFixed(2))

//Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta
//e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente
let valorConta = prompt("Qual o valor da conta?")
console.log(valorConta)
let qtdClientes = prompt("quantos clientes vão pagar a conta?")
console.log(qtdClientes)
const valorPorCliente = valorConta/ qtdClientes
console.log(valorPorCliente)
alert("Cada cliente deve pagar R$ " + valorPorCliente.toFixed(2))