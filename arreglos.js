/*var colores = ["Rojo", "verde", "morado"];
console.log(colores);
console.log(colores[1]);
console.log(colores[5]);

var frutas = new Array();
frutas[0]="Manzanas";
frutas[1]="Peras";
frutas[2]="sandias";
console.log(frutas);

var numero = new Array();
numero[0]=1;
numero[1]=2;
numero[2]=3;
numero[3]= "cuatro";
numero[100]= 7;
console.log(typeof(numero[3]));
let tamaño = numero.length;
console.log(tamaño);
console.log(numero);
for (let index = 0; index < tamaño; index++) {
    console.log(numero[index]);
}

for (let num in numero) {
    console.log(num+ " = " + numero[num]);
}*/
var matriz = new Array();
for (let x = 0; x < 10; x++) {
    matriz[x]=new Array();
    for (let y = 0; y < 10; y++) {
       matriz[x][y] = x + y;
        
    }
    
}
console.log(matriz);

for (let posicion in matriz) {
    console.log(posicion + " = " + matriz[posicion])
}
