//Packages needed for this application
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown.js");
const fs = require("fs");

//Array of questions for user input
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
    message: "Describe your project in a few sentences:",
    name: "description",
  },
  {
    type: "input",
    message: "What commands should be run to install dependencies?",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "How can your app be used?",
    name: "usage",
  },
  {
    type: "input",
    message: "How can a user contribute to your repository?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
    default: "npm test",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "Apache 2", "GPL 3", "BSD 3", "None"],
    filter(val) {
      return val.toLowerCase().replace(/\s/g, "");
    },
  },
];

//Write data into a new README.md file
function writeToFile(data) {
  const fileName = `${data.title.toLowerCase().split(" ").join("")}-README.md`;
  const mark = markDown(data);
  fs.writeFile(fileName, mark, (err) => {
    err ? console.log(err) : console.log("New README file is generated!");
  });
}

//Initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

init();
