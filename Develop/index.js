var inquirer = require("inquirer");
var markdown = require("./utils/generateMarkdown");
var fs = require("fs");
var axios = require("axios");
// array of questions for user
const questions = [
  {
    type: "input",
    message: "what is your title? ",
    name: "title",
  },
  {
    type: "input",
    message: "what is your description ? ",
    name: "description",
  },
  {
    type: "input",
    message: "what is your installation ? ",
    name: "installation",
  },
  {
    type: "input",
    message: "what is your usage? ",
    name: "usage",
  },
  {
    type: "input",
    message: "what is your license? ",
    name: "license",
  },
  {
    type: "input",
    message: "what are you contributing ? ",
    name: "contributing",
  },
  {
    type: "input",
    message: "what is your tests ? ",
    name: "tests",
  },
  {
    type: "input",
    message: "what is your github username ? ",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "what is your email ? ",
    name: "email",
  },
];

// function to write README file
function createFile(fileName, data) {
  //   console.log("display value is ", fileName);
  fs.writeFile(fileName, data, function () {
    console.log("success");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    //  console.log(response)
    axios
      .get("https://api.github.com/users/" + response.githubUsername)
      .then(function (gitHubData) {
        response.gitHubProfileLink = gitHubData.data.html_url;
        var content = markdown(response);

        //    console.log(content);
        createFile("./README.md", content);
      });
    // console.log(response.title);
  });
}

// function call to initialize program
init();
