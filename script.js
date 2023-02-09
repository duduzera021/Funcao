function Nome(saudacao, emocao, eduardo){
    console.log(
        saudacao, emocao, eduardo
    ) 
}
Nome("bom dia", "felicidade", "rodrigues")
Nome("boa tarde", "tristeza", "azevedo")
Nome("Boa noite", "raiva", "braun")

function Pessoa(Nome, idade, estilo_musical){
    console.log(
        Nome, idade, estilo_musical
    )
}
Pessoa("eduardo", "17", "pagode")

function Musicas(filme, musica){
    console.log(
        filme, musica
    )
}
Musicas("Creed", "Deixa_acontecer")

function Matematica(numero){
    console.log(
        numero*3
    )
}
Matematica(10)
Matematica(50)

function verificar(algo){
    if(algo==true){
        console.log("e verdade")
    }else{
        console.log("e mentira")
    }
    

}
let oi = false
verificar(oi)