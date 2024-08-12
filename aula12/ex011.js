var idade = 12
if (idade<16) {
    console.log("Não Vota")
} else if (idade < 18 || idade >= 60) {
    console.log("Voto Facultativo")
} else {
    console.log("Voto Obrigatório")
}