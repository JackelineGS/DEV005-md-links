// Lee un archiivo 
// Utilicemos la librería nativa FS (FileSystem)
const fs = require('fs'); 
const path = require('path');
// const fetch = require('node-fetch');
const axios = require('axios');

const readFile = (file) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(file,(err, data) => {
            if(err) {
                reject('No tiene contenido')
            }
            resolve(data)
            //resolve({data,message:'Ok, si hay contenido'})
            if(path.isAbsolute(file)){
                console.log('Ruta absoluta')
                
            }
            else{
                const rutaAbsoluta = path.resolve(file);
                console.log(rutaAbsoluta);
            }
        })
    })
}

//console.log(path.isAbsolute('./src/documentos/archivo.txt'));
//console.log(path.isAbsolute('//nodejs.org/api/path.html#pathisabsolutepath'));
//console.log(path.isAbsolute('archivo.txt'));

// archivo es el callback 
// .then nos permite consumir la promesa y .catch() es el manejador de excepciones
readFile('archivo.txt').then(archivo => {
    console.log(archivo);
}).catch(err => {
    console.log(err);
})


// Leer el archivo con axios
/*const getContenido =()=> {
    return readFile('./src/documentos/archivo.txt')
    .then(perrito => {
        return axios.get(`https://dog.ceo/api/breed/${perrito}/images/random`)
    }).catch(err => {
        return 'no se pudo leer el archivo del perrito'
    })
}

getContenido().then(perro=>{console.log(perro)})*/

// Guardar la imagen en un nuevo archivo
/*const writePerrito = (file, imagen) =>{
    return new Promise((resolve, reject)=> {
        fs.writeFile(file, imagen, err => {
            if(err){
                reject('No se guardó el archivo')
            }
            resolve('Se guardó el archivo')
        })
    })
}

getContenido()
.then(respuesta => {
    return writePerrito('perrito.txt', respuesta.data.message)
}).then(message =>{
    console.log(message);
}).catch(error=>{
    console.log(error);
})

const notas = './src/documentos/archivo.txt';
fs.readFile(notas, 'utf8', (error, data) => {
    if(error) {
        console.error('Se presentó un error al leer el archivo', error);
        return;
    }
    console.log('Contenido del archivo:',data);
// Verificar que la extensión sea .md 
const name = path.extname(notas);
console.log('El archivo tiene una extensión llamada:', name); 
});

// Leer los archivos de una carpeta de forma asincrona: readdir
 
/*const result = fs.readdir('./src/documentos', (error, files) => {
    if(error) {
        console.error('Se presentó un error al leer el archivo', error);
        return;
    }
    console.log('Archivos:', files);
});
console.log(result); */

// Une dos rutas usando path() 
//path1 = path.join('./src','index.html');
//console.log(path1);


// Obtener la ruta del documento local

