const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  { type: 'input', name: 'title', message: 'What is your project title?' },
  { type: 'input', name: 'description', message: 'Provide a description of your project:' },
  { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
  { type: 'input', name: 'usage', message: 'How is this project used?' },
  { type: 'input', name: 'contributing', message: 'What are the contribution guidelines?' },
  { type: 'input', name: 'tests', message: 'What are the test instructions?' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPLv3', 'Apache 2.0'] },
  { type: 'input', name: 'github', message: 'What is your GitHub username?' },
  { type: 'input', name: 'email', message: 'What is your email address?' },
];

function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, you can reach me at [${answers.email}](mailto:${answers.email}).  
You can also find me on GitHub at [${answers.github}](https://github.com/${answers.github}).
`;
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md file has been generated!');
  });
}

init();
