let amigo = {
    nome:'Ruan',
    sexo:'M',
    idade:18,
    peso:74.2,
    engordar(p=0){
        console.log(`Engordou ${p}Kgs`)
        this.peso += p
    }
}
console.log(amigo.peso)
amigo.engordar(32)
console.log(amigo.peso)