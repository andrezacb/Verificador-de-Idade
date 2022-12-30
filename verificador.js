function verificar(){
    var nome = document.getElementById('nome').value
    var atual = new Date()
    var Ano = atual.getFullYear()
    var AnoNasc = Number(document.getElementById('AnoNasc').value)
    var res = document.getElementById('res')
    if(AnoNasc == 0 || AnoNasc > Ano){
        window.alert(`[ERRO] Por favor ${nome [0].toUpperCase() + nome.slice(1).toLowerCase()} verifique os dados inseridos `)
    }else{
        var idade = Ano - AnoNasc
        var sexo = document.getElementsByName('sexo1')
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
        }else if (sexo[1].checked){
            genero= 'Mulher'
        }
        if(idade <=10){
            img.setAttribute('src',`imagem/${genero}/criança.png`)
        }else if( idade <=17){
            img.setAttribute('src',`imagem/${genero}/adolecente.png`)
        }else if(idade <=30){
            img.setAttribute('src',`imagem/${genero}/jovem.png`)
        }else if(idade <=50){
            img.setAttribute('src',`imagem/${genero}/adulto.png`)
        }else{
            img.setAttribute('src',`imagem/${genero}/old.png`)
        }
       
        res.innerHTML = `<p>Detectamos ${genero} chamado(a) <br> ${nome} de ${idade} anos</p>`
        res.appendChild(img)
    }
}

