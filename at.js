function torresDeHanoi(n, origem, aux, destino) {
    if (n === 1) {
        console.log(`Move disco 1 de ${origem} para ${destino}`);
        return;
    }
    
    torresDeHanoi(n - 1, origem, destino, auxiliar);
    console.log(`Move disco ${n} de ${origem} para ${destino}`);
    torresDeHanoi(n - 1, aux, origem, destino);
}


const n = 3;  // Número de disco
const origem = 'Torre_A';
const auxiliar = 'Torre_B';
const destino = 'Torre C';

torresDeHanoi(n, origem, auxiliar, destino);
