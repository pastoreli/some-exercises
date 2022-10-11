let base = prompt("Digite o número base");
let expoente = prompt("Digite o do expoente");
        
let contador = 1;
let valorFinal = base;

while(contador < expoente) {
    valorFinal = valorFinal * base;
    contador = contador + 1;
}

console.log("Valor: "+valorFinal);