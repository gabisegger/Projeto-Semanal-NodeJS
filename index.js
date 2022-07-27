const readline = require('readline-sync');

function sortCssProperties(){
    let properties = [];
    let input = '';

    while (input != 'sair') {
        properties.push(input);
        input = readline.question('Digite uma propriedade CSS: ').toLocaleLowerCase();
    }

    console.log(properties.sort().join('\n'));
}

sortCssProperties();