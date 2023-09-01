/*
Crie uma estrutura if que verifica a entrada na balada, se tiver mais 
de 18 anos pode entrar;
Armazenar a idade em uma variável let;
Insira uma instrução console.log("Pode entrar"), no caso a pessoa tenha mais que 18 anos.
*/

function entrarFesta (idade) {

if(idade >= 18) {
    console.log("Pode entrar")
} else {
    console.log('Não pode entrar')
}
}

entrarFesta(21)
