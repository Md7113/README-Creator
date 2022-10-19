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
        message: 'select every option you want in your table of contents, use Space bar to select an option <a> to select all and <i> to invert your selections:',
        type: 'checkbox',
        choices: ['title','description','Table of Contents','Instalation','Usage','License','Contributing','Test','Questions']
       },{
        name:'Instalation',
        message: 'Write Instalation instructions if aplicable, if not Write N/A and this option will not be included: ',
        type: 'input'
       },{
        name:'Usage',
        message: 'Write a description about the usage of your portfolio or write N/A if you dont want it included:',
        type: 'input'
       },{
        name: 'License',
        message: 'Which license do you want to use for your README:',
        type: 'list',
        choices: ['none','Apaches License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License','BSD 3-Clasue "New" or "revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0','GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0','The Unlicense']
       },{
        name:'Contributing',
        message: 'List of all contributers seperated by a comma, Ex[jon, doe, jim, Harper] or N/A if this does not apply:',
        type: 'input'
       },{
        name:'tests',
        message: 'describe any tests you have:',
        type: 'input'
       },{
        name:'email',
        message: 'enter your email so people can reach you:',
        type: 'input'
       },{
        name:'github',
        message: 'enter your github so people can see your other creations:',
        type: 'input'
       }
    ])
      .then(function(answer){
       console.log(answer);
       console.log(answer.TableOfContents)
       console.log(answer.Contributing.split(','))
      });