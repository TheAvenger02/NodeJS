//Declaramos un arreglo de peras 🍐
const peras = ['🍐','🍐','🍐']

//Resultado en manzanas 🍎
let manzanas = []
//Función de flecha que cambia pera por manzana
const procesar = (valor) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(valor === '🍐'){
                resolve('🍎');
            }
        },1000);
    });
}

manzanas = peras.map((i)=> procesar(i));
//console.log(manzanas);
//Iterador de promesas
const resultado = Promise.all(manzanas);
resultado.then((respuesta)=>{
    console.log(`valor = ${respuesta}`);
})

// for(let i=0;i<peras.length;i++){ console.log(peras[i]; manzanas += procesar(peras[i]) console.log(manzanas));}

