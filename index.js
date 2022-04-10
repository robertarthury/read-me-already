// Variables containing required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// Variables to connect modules to application
const generateMarkdown = require("/Users/robertyoung/bootCamp/potential-enigma/Develop/utils/generateMarkdown.js");
const licenseBadge = require("/Users/robertyoung/bootCamp/potential-enigma/Develop/utils/licenseBadge.js").licenseBadge;
const questions = require("/Users/robertyoung/bootCamp/potential-enigma/Develop/utils/questions.js").questions;
//Allows for use of async await
const writeFileAsync = util.promisify(fs.writeFile);

// create a function to initialize program and create README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("created-README.md", readMeData);
  } catch (err) {
    throw err;
  }
}
//call the function
init();