// TODO: Include packages needed for this application

const fs = require("fs")
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require("generateMarkdown");
const { type } = require("os");



// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "userName",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address?"
  },

]
inquirer.prompt(questions)
  .then(function (res) {
    console.log(res.userName)
    console.log(res.email)
    fs.writeFile("myStuff.txt", res.userName, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    })
  })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
