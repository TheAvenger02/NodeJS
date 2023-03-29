//Funciones de flecha
const flecha_1 = (a,b) => {
    return a+b;
}
//console.log(flecha_1(4,3));

const flecha_2 = (a,b) => a+b;
//console.log(flecha_2(4,3));

const validador = (a,b) => {
    if(a>b){
        return a+b;
    }
    else{
        return a*b;
    }
}
console.log(validador(2,4));