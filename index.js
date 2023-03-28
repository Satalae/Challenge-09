// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'Please enter a title for your project: ',
    'Please enter a short description for your project: ',
    'Please enter installation instructions for your project: ',
    'Please enter some usage information for your project: ',
    'Please enter your contribution guidelines: ',
    'Please enter instructions to test your project: '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const dataDetails = Object.values(data);
    console.log('Filename is: ' + fileName + '\n');
    console.log(dataDetails[1]);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: questions[0],
            },
            {
                name: 'description',
                type: 'input',
                message: questions[1],
            },
            {
                name: 'install',
                type: 'input',
                message: questions[2],
            },
            {
                name: 'usage',
                type: 'input',
                message: questions[3],
            },
            {
                name: 'contributions',
                type: 'input',
                message: questions[4],
            },
            {
                name: 'instructions',
                type: 'input',
                message: questions[5],
            },
        ])
        .then((answer) => {
            console.log(answer);
            writeToFile('README.md', answer);
        })
}

// Function call to initialize app
init();
