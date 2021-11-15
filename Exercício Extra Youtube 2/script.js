function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var resultado = document.querySelector('div#res')
    if(formularioano.value.length == 0 || Number (formularioano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (formularioano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('scr', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('scr', 'foto-jovem-m.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('scr', 'foto-jovem-f.jpg')
            } else if (idade < 50){
                img.setAttribute('scr', 'foto-adulto-f.jpg')
            } else {
                img.setAttribute('scr', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
        res.appendChild(img)
    }
}