const inquirer = require('inquirer');
const fs = require('fs')
const util = require
const generatePage = require('./generateMarkdown.js');
const { writeFile, copyFile } = require('./README.md');
const commandLineArgs = process.argv.slice(2, process.argv.length);
    console.log(commandLineArgs);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt[(
        {
            type: 'input',
            name: 'projectName',
            message: "What is your project's name? (Required)",
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log("Please enter a project name!");
                    return false;
                    }
                }
        },
        {
            tpye: 'input',
            name: 'describtion',
            message: 'Please provide a description of your new project. (Required)',
            validate: describtionInput => {
                if (describtionInput) {
                  return true;
                } else {
                  console.log('Please enter a describtion of the project!');
                  return false;
                }
             }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'usageInput',
            message: 'Would you like to include information about the usage of the project?',
            default: false
        },
        {
            type: 'input',
            name: 'testInput',
            message: 'Which testing suites where used to create the project?',
            default: false
        },
        {
            type: 'input',
            name: 'contributeInput',
            message: 'Any other people contributing to this project?',
            default: false
        },
        {
            type: 'input',
            name: 'emailInput',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email address!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installationInput',
            message: 'Are there any dependencies required for installation?',
            default: false
        },
        {
            type: 'list',
            name: "licenseInput",
            message: "Would you like to choose a lisence that the project is covered under?",
            choices: [
                'none',
                'The MIT License', //= [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]
                'GNU General Public License' //[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
            ]
        }
    )]
}
// TODO: Create a function to write README file



// Function call to initialize app
//init();

promptUser()
  .then((data) => writeFileAsync ('README.md',
  generateMarkdown(data)))
    .then(() => console.log('Success!')
  .catch((err) => {
    console.log(err)};