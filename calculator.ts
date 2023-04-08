#! /usr/bin/env node

// Import Packages
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";

console.log(figlet.textSync('Calculator', {
    font: 'Standard',
    horizontalLayout: 'fitted',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
console.log(chalk.bold.bgCyan('\t Author: Hamza Jamil ', chalk.black.bgBlack('\tPIAIC-Batch43 (Q1) \n')));

let option;
do{
    let answers:any = await inquirer.prompt([ // prompt to take inputs
        {
            type: "list",
            name: "calculation",
            message: "Choose Operator:",
            choices: ['Add', 'Subract', 'Multiply', 'Divide', 'Modulus']
        },
        {
            type: "number",
            name: "number1",
            message: chalk.blue("Enter First Number:"),   
        },
        {
            type: "number",
            name: "number2",
            message: chalk.blue("Enter Second Number:"),
        },
    ]);
    // conditionals to check condition for Arithmatic Operation
    switch(answers.calculation){
    case 'Add':
        console.log(chalk.yellow(`Addition Result: ${answers.number1} + ${answers.number2} =  ${answers.number1 + answers.number2}`));
        break;
    case 'Subract':
        console.log(chalk.yellow(`Subraction Result: ${answers.number1} - ${answers.number2} =  ${answers.number1 - answers.number2}`));
        break;
    case 'Multiply':
        console.log(chalk.yellow(`Multiplication Result: ${answers.number1} * ${answers.number2} =  ${answers.number1 * answers.number2}`));
        break;
    case 'Divide':
        console.log(chalk.yellow(`Division Result: ${answers.number1} / ${answers.number2} =  ${answers.number1 / answers.number2}`));
        break;
    case 'Modulus':
        console.log(chalk.yellow(`Modulus Result: ${answers.number1} % ${answers.number2} =  ${answers.number1 % answers.number2}`));
        break;
    }
   
    
    // repeat the process to perform another operation
    let choice = await inquirer.prompt([{
        type: 'confirm',
        name: "selection",
        message: chalk.cyan("Perform another operation press Y for Yes and N for No: "),
        default: false
    }   
    ]);
    if(choice.selection){
        option = 'y'
    } else {
        option = 'n'
    }
}while(option.toLowerCase() === "y") // check condition to repeat the process.
 