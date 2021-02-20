// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
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
    message:
      "What are the steps required to install your project?",
  },
  {
    // Instructions
    type: "input",
    name: "instructions",
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
    name: "contributions",
    message: "How can others contribute to your project?",
  },
  {
    // Tests
    type: "input",
    name: "tests",
    message: "How do you run tests for your project?",
  },
  {
    // Liscence
    // https://choosealiscense.com
    type: "list",
    name: "liscense",
    choices: ["MIT", "apache", "mozilla", "no licesnse"],
    message: "Choose your liscense.",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) console.error(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // console.log(response);
    writeToFile("./utils/README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
