// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    name:"title",
    message:'What is the name of your application?'
},
{
    type:"input",
    name:"description",
    message:'Please describe your application.'
},

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(data => {
    fs.writeFileSync('ReadMe.md', generateMarkdown(data))
})

}

// Function call to initialize app
init();
