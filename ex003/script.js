function contar () {
    let ini = document.getElementById('começar')
    let fim = document.getElementById('final')
    let passo = document.getElementById('avanço')

    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br> ' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //Contagemn crescente
            for(let c = i; c <= f; c += p)
            res.innerHTML += `${c} \u{1F449}`
        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p)
            res.innerHTML += `${c}\u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}