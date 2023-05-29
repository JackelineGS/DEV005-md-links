const { readFile } = require('../readArrays');
const { validatePath, statusDirectory,statusFile } = require('../paths');

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
    expect(typeof statusDirectory).toBe('function');
  });
  it('Should return true or false', () => {
    const ruta = './src/documentos/archivo.md';
    expect(statusFile(ruta)).toEqual(true);
  })
});

describe('readFile read files', () => {
  it('Should return a Buffer', () => {
    const ruta = './src/documentos/archivo.md';
    const result = 'contenido'
    return readFile(ruta).then(data => {
      expect(data).toMatch(result);
    })
  })
})






