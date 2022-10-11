let valorFornecido = prompt("Digite uma letra");
if(
    valorFornecido == "a" || 
    valorFornecido == "e" || 
    valorFornecido == "i" || 
    valorFornecido == "o" || 
    valorFornecido == "u" ||
    valorFornecido == "A" || 
    valorFornecido == "E" || 
    valorFornecido == "I" || 
    valorFornecido == "O" || 
    valorFornecido == "U"
){
    console.log("Vogal");
} else {
    console.log("Consoante");
}