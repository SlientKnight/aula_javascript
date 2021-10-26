function clicou(){
    document.getElementById("video").innerHTML = "<b> Youtube </b>"
    //console.log(document.getElementById("agradecimento"))
}

function redirecionar() {
    window.open("https://www.youtube.com/?gl=BR") //abre uma nova aba
    //window.location.href = "https://www.youtube.com/?gl=BR" //abre na mesma aba
}

function em_cima(elemento){
    elemento.innerHTML = "obrigado por passar o mouse"
    //document.getElementById("mouse-move").innerHTML = "obrigado por passar o mouse"
}

function fora(elemento){
    elemento.innerHTML = "passe o mouse aqui"
    //document.getElementById("mouse-move").innerHTML = "passe o mouse aqui"
}

function load(){
    alert("pagina carregada")
}

function mudanca(elemento){
    console.log(elemento.value)
}

/*
var d = new Date()
alert(d.getMinutes())
*/

/*
var count;
for (count=0; count<=5; count++) {
    alert(count)
}
*/

/*
var count = 0;
while (count<=5) {
    console.log(count);
    count ++;
}
*/

/*
var idade = prompt("Qual a sua idade maninho? ");
if (idade >= 18) {
    alert("parabens ja pode ser preso")
} else {
    alert("menor de idade, não foi dessa vez")
} 
*/

/*
var frutas = [{nome:"maça",cor: "vermelho"},{nome: "uva", cor: "roxa"}]
console.log(frutas)
alert(frutas[0].cor)
*/

/*
var lista = ["maça","pera","laranja"]
lista.push("uva")
lista.pop("uva")
console.log(lista.length)
*/

/*
var nome = "Pedro Alcântara";
var n1 = 5 ;
var n2 = 4 ;
console.log(n1 * n2) ;
var frase = "o japão tem o melhor time do mundo" ;
alert("bem vindo " + nome) 
frase.replace("japão","brasil");
alert (frase.toUpperCase());
alert("seja bem viado " + nome);
*/
