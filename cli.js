#!/usr/bin/env node
const path = require('path');
const { mdLinks } = require('./index');
const { stats, validateStats } = require('./stats');
// const chalk = require('chalk');
// process.argv = [rutaNode, rutaScript, arg1, arg2]
// const [,, ...args] = process.argv;
// console.log(`Hello World ${args}`);
// Un arreglo, un objeto con las propiedades de validate true

// const cli = (ruta, option) => {
const args = process.argv.slice(2);
const entrada = args[0];
const opcion = args[1];
if (opcion.includes('--validate')) {
  mdLinks(entrada, { validate: true }).then((result) => {
    result.forEach((element) => {
      console.log(Object.values(element).join(', '));
    });
  });
} else if (opcion.includes('--stats')) {
  stats(entrada).then((result) => console.log(result));
} else if (opcion.includes('--stats--validate')) {
  validateStats(entrada).then((result) => console.log(result));
}
// };

/* module.exports = {
  cli,
}; */
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
