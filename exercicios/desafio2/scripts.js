function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os seus dados novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'img/menino.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'img/homem.jpg')
            } else {
                img.setAttribute('src', 'img/idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade <= 12) {
                img.setAttribute('src', 'img/menina.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'img/mulher.jpg')
            } else {
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}