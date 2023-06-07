#!/usr/bin/env node
const { mdLinks } = require('./index');

// const chalk = require('chalk');
// process.argv = [rutaNode, rutaScript, arg1, arg2]
const [,, ...args] = process.argv;
console.log(`Hello World ${args}`);
// npm link

/* const receive = process.argv.slice(2);

if (receive.includes('--validate')) {
  console.log('Se seleccionó la opción 1');
} else if (receive.includes('--stats')) {
  console.log('Se seleccionó la opción 2');
} else if (receive.includes('--stats --validate')) {
  console.log('No se seleccionó una opción válida');
} */

/* md-links <path-to-file> [options]
--validate
$ md-links ./some/example.md --validate
--stats
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
const cli = (option) => {
if(option.validate && PushSubscriptionOptions.stats) {
    funcionx();
    else if (options.validate) {
        mdLinks(ruta);
    } else if (options.stats) {

    } else {
        resolve( { })
    }
 }
};

cli('./src', {}).then(() => {

}); */
