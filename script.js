
function media(){
    let nome = window.prompt('Digite seu Nome Completo')
    let id = window.prompt('Digite sua matrícula')
    let n1 = Number(window.prompt('Qual é a nota 1 ?'))
    let n2 = Number(window.prompt('Qual é a nota 2 ?'))
    let n3 = Number(window.prompt('Qual é a nota 3 ?'))
    let faltas = Number(window.prompt('Quantas vezes você faltou?'))
    med = Math.round((n1+n2+n3)/3)
    let res = window.document.getElementById('resultado')
    
    
    if (med>= 7 && faltas<=15){
        res.innerHTML = (`<p> meus parabéns <strong> ${nome}</strong> da matrícula: <strong> ${id}</strong> sua média é: </br><strong> ${med}</strong>, com <strong>${faltas}</strong> faltas no período, você foi <strong>Aprovado(a)!</strong></p>`)
        
        
    }else{
        res.innerHTML += (`<p> infelizmente <strong> ${nome}</strong> da matrícula: <strong> ${id}</strong> sua média é: </br><strong> ${med}</strong>,  com   <strong>${faltas}</strong> faltas no período, você foi<strong> Reprovado(a)!</strong></p>`)
    
    }
    
        
}




