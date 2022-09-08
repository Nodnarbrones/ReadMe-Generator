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
{
    type:"input",
    name:"installation",
    message:'Please describe your application installation instructions.'
},{
    type:"input",
    name:"usage",
    message:'Please describe your usage information.'
},{
    type:"input",
    name:"contribution",
    message:'Please describe the guidlines for contribution.'
},
{
    type:"list",
    name:"license",
    message:'Please choose a license for your application.',
    choices:['ISC','MIT','GNU','None']
},
{
    type:"input",
    name:"test",
    message:'Please describe the instructions to test your application.'
},
{
    type:"input",
    name:"email",
    message:'Please enter your email contact information.'
},
{
    type:"input",
    name:"github",
    message:'Please enter your github username.'
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
