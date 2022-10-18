// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//title
//Description
//Table of contents
//Installation
//Usage
//License
//contributing
//tests
//questions
//license
//gitHub in questions
//email in questions
//TOC links must work

inquirer.prompt([
      {
        name: 'title',
        message: 'What Is the title of your README?',
        type: 'input'
       },{
        name:'Description',
        message: 'write a comprehensive description of your Repository:',
        type: 'input'
       },{
        name: 'TableOfContents',
        message: 'enter in your table of contents, seperate with a comma Ex[first , second , third] :',
        type: 'input'
       },{
        name:'Instalation',
        message: 'Write Instalation instructions if aplicable, if not Write N/A and this option will not be included: ',
        type: 'input'
       }
    ])
      .then(function(answer){
       console.log(answer);
       console.log(answer.TableOfContents.split(','))
      });