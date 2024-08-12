function carregar() {
    var msg = window.document.getElementById("msg")
    var imagem = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        imagem.src = "img/dia.avif"
        document.body.style.background = 'rgb(50, 70, 150)'
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = "img/tarde.jpg"
        document.body.style.background = 'linear-gradient'
    } else {
        imagem.src = "img/noite.jpg"
        document.body.style.background = 'black'
    }
}