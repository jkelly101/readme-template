// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
      type: "checkbox",
      name: "sections",
      message: "What sections would you like included in your README?",
      choices: ["Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"]
  }
];

// confirm, checkbox, list

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Creates the actual function
// Creating the README file (filename) here and calling the generateMarkdown function(data) & call back for
// Put fs write file inside here
// writeToFile(actual-fileName(README.md), generateMarkdown(data))

// TODO: Create a function to initialize app
function init() {}
// function you want to initialialize on start uo
// writeToFile()

// Function call to initialize app
init();
