// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your probject in a few sentences",
    name: "description",
  },
  {
    type: "input",
    message: "What commands should be run to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to repo?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "list",
    message: "License: What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "Apache", "GPL 3", "BSD", "None"],
    filter(val) {
      return val.toLowerCase().replace(/\s/g, "");
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  const fileName = `${data.name.toLowerCase().split(" ").join("")}-README.md`;
  const mark = markDown(data);
  fs.writeFile(fileName, mark, (err) => {
    err ? console.log(err) : console.log("New README file is generated!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
