// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  
  ${data.description}  
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}

  ## Usage 
  
  ${data.usage}
  
  ## License
  
  ${data.license}

  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath) 
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions

  ${data.questions}
`;
}

module.exports = generateMarkdown;
