import fs from 'fs-extra';
import path from 'path';
import color from 'chalk';
import { fileURLToPath } from 'url';

// Configurar __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

if (!projectName) {
    console.log(color.red("Por favor forneça o nome do projecto"));
    process.exit(1);
}

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
        //agradecer por usar a ferramenta
        console.log(color.green('Obrigado por usar o nextjsTemplateCLI!'));
        //creditos ao autor
        console.log(color.blue('Feito por Fernando Chamussola\n'));
        process.exit(0);
    })
    .catch((err) => {
        console.error(color.red(err));
        process.exit(1);
    });
