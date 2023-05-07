let numero = prompt("informe o numero")
let questao1 = document.querySelector ("#questao1")
questao1.innerHTML = `O resultado é: ${ numero * 2}`

let valorJantar = parseInt(prompt("Qual valor da conta ? "))
const valorGarcom = valorJantar * 0.10
let questao02 = document.querySelector("#questao02"); // Pega id da tag div de forma dinamica
questao02.innerHTML = `O valor da Jantar é: ${valorJantar}`