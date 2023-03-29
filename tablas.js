const fs = require('fs');
let resultado = "";

for(let i=1; i<=10;i++){
    resultado += ("9x"+i+"="+(9*i)+"\n");
}

fs.writeFile('tabla-9.txt', resultado, (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});