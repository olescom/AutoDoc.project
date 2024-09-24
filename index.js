import inquirer from 'inquirer';
import fs from 'fs';

// Define questions array
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  // Add more questions here as needed
];

// Function to generate README content
function generateREADME(answers) {
  return `# ${answers.projectTitle}

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
Provide installation instructions here.

## Usage
Provide usage information here.

## License
This project is licensed under the terms of [insert license].

## Contributing
Provide contribution guidelines here.

## Tests
Provide test instructions here.

## Questions
For questions, you can reach me at ${answers.email}. Visit my GitHub profile [here](https://github.com/${answers.github}).
`;
}

// Initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md file has been generated!');
  });
}

init();
