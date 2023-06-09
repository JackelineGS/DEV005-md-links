const { readFiles } = require('../readArrays');
const { validatePath, statusDirectory, statusFile } = require('../paths');
const { mdLinks } = require('../mdLinks');
const { getLinks } = require('../links');
const { getmdPath } = require('../recursividad');

describe('validatePath is a function', () => {
  it('should be a function', () => {
    expect(typeof validatePath).toBe('function');
  });
  it('Should return an absolute path', () => {
    const ruta = './src/documentos/archivo.md';
    const result = 'C:\\Users\\user\\Desktop\\Laboratoria\\DEV005-md-links\\src\\documentos\\archivo.md';
    expect(validatePath(ruta)).toEqual(result);
  })
});

describe('statusDirectory is a function', () => {
  it('Should be a function', () => {
    expect(typeof statusDirectory).toBe('function');
  });
  it('Should return true or false', () => {
    const ruta = './src/documentos/archivo.md';
    expect(statusDirectory(ruta)).toEqual(false);
  })
});

describe('statusFile is a function', () => {
  it('Should be a function', () => {
    expect(typeof statusFile).toBe('function');
  });
  it('Should return true or false', () => {
    const ruta = './src/documentos/archivo.md';
    expect(statusFile(ruta)).toEqual(true);
  })
});

describe('readFile read files', () => {
  it('Should return a content', () => {
    const result = [
      [
        {
          text: 'javascript30',
          file: './src/documento.md',
          href: 'https://javascript30.com/'
        },
        {
          text: 'javascript30',
          file: './src/documento.md',
          href: 'https://javascript30.com/'
        },
        {
          text: 'js_object',
          file: './src/documento.md',
          href: 'https://www.w3schools.com/js/js_object'
        }
      ],
      [
        {
          text: 'process',
          file: './src/documentos/archivo.md',
          href: 'https://nodejs.org/api/process.html'
        },
        {
          text: 'Status',
          file: './src/documentos/archivo.md',
          href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status'
        },
        {
          text: 'Referen',
          file: './src/documentos/archivo.md',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Referen'
        }
      ]
    ]
    const ruta = ['./src/documento.md', './src/documentos/archivo.md']
    return expect(readFiles(ruta)).resolves.toStrictEqual(result)
  })
})


describe('mdLinks', () => {
  it('Debe devolver un array de objetos', () => {
  
     const allArrays = [{
      text: 'javascript30',
      file: 'C:\\Users\\user\\Desktop\\Laboratoria\\DEV005-md-links\\src\\documento.md',
      href: 'https://javascript30.com/',
      status: 200,
      message: 'OK'
    },
    {
      text: 'javascript30',
      file: 'C:\\Users\\user\\Desktop\\Laboratoria\\DEV005-md-links\\src\\documento.md',
      href: 'https://javascript30.com/',
      status: 200,
      message: 'OK'
    },
    {
      text: 'js_object',
      file: 'C:\\Users\\user\\Desktop\\Laboratoria\\DEV005-md-links\\src\\documento.md',
      href: 'https://www.w3schools.com/js/js_object',
      status: 404,
      message: 'fail'
    }]
  
  // jest.spyOn(fs, 'axios.get').mockReturnValue()
  const route = './src/documento.md'
      return expect(mdLinks(route, { validate: true })).resolves.toStrictEqual(allArrays)
});

})





// Para probar el 404 va a llegar al then() y el código debe usar el 

