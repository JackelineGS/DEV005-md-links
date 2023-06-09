#!/usr/bin/env node
const { mdLinks } = require('./mdLinks');
const { validateStats } = require('./stats');

const args = process.argv.slice(2);
const entrada = args[0];
const validateValue = args.includes('--validate');
const statsValue = args.includes('--stats');
const options = { validate: validateValue, stats: statsValue };

if (!options.stats) {
  mdLinks(entrada, options).then((result) => {
    result.forEach((element) => console.log(element));
  });
} else if (options.stats && !options.validate) {
  mdLinks(entrada, options).then((result) => console.log(result));
} else if (options.stats && options.validate) {
  validateStats(entrada, options).then((result) => console.log(result));
}
