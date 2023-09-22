function torresDeHanoi(n, origem, aux, dest) {
    if (n === 1) {
        console.log(`Move disco 1 de ${origem} para ${dest}`);
        return;
    }
    
    torresDeHanoi(n - 1, origem, dest, aux);
    console.log(`Move disco ${n} de ${origem} para ${dest}`);
    torresDeHanoi(n - 1, aux, origem, dest);
}


const n = 3;  // Número de disco
const origem = 'Torre_A';
const auxiliar = 'Torre_B';
const destino = 'Torre C';

torresDeHanoi(n, origem, auxiliar, destino);
