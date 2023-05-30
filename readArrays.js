const fs = require('fs');
//
// const axios = require('axios');
// const jsdom = require('jsdom');

const readFile = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject();
    }
    console.log(data);
    resolve(data);
  });
});

// Extraer los links de un archivo
// Expresiones regulares

/* readFile('./src/documentos/archivo.md').then((result) => {
  const contenido = result;
  console.log(contenido);
const expresions = /[^>]+(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
  const pathsMd = contenido.match(expresions);
  console.log(pathsMd);
}); */

/* const textMd = '# Título del documento\n\nEste es un texto en formato **Markdown**.';
const htmlCont = marked(textMd);

console.log(htmlCont); */

// Leer el archivo con axios
/* const getContenido = () => readFile('./src/documentos/archivo.md')
  .then((perrito) => axios.get(`https://dog.ceo/api/breed/${perrito}/images/random`))
  .catch((err) => console.log (err));

getContenido().then((perro) => { console.log(perro); }); */

// Guardar la imagen en un nuevo archivo
/* const writePerrito = (file, imagen) => new Promise((resolve, reject) => {
  fs.writeFile(file, imagen, (err) => {
    if (err) {
      reject('No se guardó el archivo');
    }
    resolve('Se guardó el archivo');
  });
}); */

/* getContenido()
.then(respuesta => {
    return writePerrito('perrito.txt', respuesta.data.message)
}).then(message =>{
    console.log(message);
}).catch(error=>{
    console.log(error);
}) */

/* const notas = './src/documentos/archivo.txt';
fs.readFile(notas, 'utf8', (error, data) => {
  if (error) {
    console.error('Se presentó un error al leer el archivo', error);
    return;
  }
  console.log('Contenido del archivo:', data);
  // Verificar que la extensión sea .md
  const name = path.extname(notas);
  console.log('El archivo tiene una extensión llamada:', name);
}); */

// Leer los archivos de una carpeta de forma asincrona: readdir

/* const result = fs.readdir('./src/documentos', (error, files) => {
    if(error) {
        console.error('Se presentó un error al leer el archivo', error);
        return;
    }
    console.log('Archivos:', files);
});
console.log(result); */

// Obtener la ruta del documento local

module.exports = {
  readFile,
};
