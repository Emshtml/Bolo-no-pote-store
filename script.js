function comprar(produto){

let numero="5511992952215"

let mensagem=`Olá, quero pedir um bolo no pote: ${produto}`

let url=`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url)

}
