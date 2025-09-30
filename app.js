#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import color from 'chalk';
import { fileURLToPath } from 'url';
import { program } from 'commander';

// Configurar __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração do Commander
program
  .name('nxgo')
  .description('Cria um novo projeto Next.js a partir de um template')
  .version('1.0.0')
  .argument('<projectName>', 'Nome do projeto a ser criado')
  .action((projectName) => {
    console.log(color.blue(`Criando o projecto ${projectName}`));

    const templatePath = path.join(__dirname, './templates/nextV1');
    const targetPath = path.join(process.cwd(), projectName);

    fs.copy(templatePath, targetPath)
      .then(() => {
        console.log(color.green('Projecto criado com sucesso'));
        console.log(color.blue(`\nPróximos passos:\n`));
        console.log(color.cyan(`  cd ${projectName}`));
        console.log(color.cyan('  cd project'));
        console.log(color.cyan('  npm install'));
        console.log(color.cyan('  npm run dev\n'));
        console.log(color.green('Obrigado por usar o nextjsTemplateCLI!'));
        console.log(color.blue('Feito por Fernando Chamussola\n'));
      })
      .catch((err) => {
        console.error(color.red(err));
        process.exit(1);
      });
  });

// Parse dos argumentos
program.parse(process.argv);
