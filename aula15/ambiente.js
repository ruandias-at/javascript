let valores = [232, 32, 425, 6234, 2, 127]

// for (let pos = 0; pos < valores.length; pos ++) {
//     console.log(`A chave ${pos} tem o valor ${valores[pos]}`)
// }

for (let pos in valores) {
    console.log(`A chave ${pos} tem o valor ${valores[pos]}`)
}
let posicao = valores.indexOf(32)
if (posicao == -1) {
    console.log("ERRO")
} else {
    console.log(`O valor está no índice ${posicao}`)
}