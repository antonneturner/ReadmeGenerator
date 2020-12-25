var inquirer= require("inquirer")
// array of questions for user
const questions = [
{
    type:"input", 
    message:"what is your title? " , 
    name:"title"
},
{
    type:"input",
    message:"what is your description ? ", 
    name:"desription"
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(response){
   console.log(response)
    console.log(response.title)
})
}

console.log(response)

// function call to initialize program
init();

