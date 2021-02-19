// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input

const questions = [
  {
      // Project Title
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
      // Description
      type: "input",
      name: "desciption",
      message: "Describe your project.",

  },
  {
      // Installation
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
      // Instructions
      type: "input",
      name: "Instructions",
      message: "Provide instructions on how to use your project.",
  },
  {
      // Usage 
      type: "input",
      name: "usage",
      message: "",
  },
  {
      // Contributing
      type: "input",
      name: "contributing",
      message: "How can others contribute to your project?"
  },
  {
      // Tests
      type: "input",
      name: "tests",
      message: "How do you run tests for your project?",
  },
  {
      // Liscence
  },
  {
      // Github Username
      type: "input",
      name: "github",
      message: "What is your Github username?",
  },
  {
      // Email Address
      type: "input",
      name: "email",
      message: "What is your email address?",
  },
];

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", generateMarkdown(data), (err) => {
    if (err) console.error(err);
  });
}

// Creates the actual function
// Creating the README file (filename) here and calling the generateMarkdown function(data) & call back for
// Put fs write file inside here
// writeToFile(actual-fileName(README.md), generateMarkdown(data))

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions){
        
    }
}
// function you want to initialialize on start uo
// writeToFile()

// Function call to initialize app
init();
