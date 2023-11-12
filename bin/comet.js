#!/usr/bin/env node

import { program } from "commander";
import { create } from "../src/create.js";
import chalk from "chalk";

program
    .version("@vue/cli")
    .usage('<command> [options]');

program
    .command('create <app-name>')
    .description('create a new comet application')
    .option('-f, --force', 'Overwrite target directory if it exists')
    .option('-m, --merge', 'Merge target directory if it exists')
    .option('-t, --template', 'Use a different template than the default one')
    .action((name, options) => create(name, options).catch(err => console.error(chalk.red(err))));

program.on('--help', () => {
    console.log()
    console.log(`  Run comet <command> --help for detailed usage of given command.`)
    console.log()
});

program.parse(process.argv)
