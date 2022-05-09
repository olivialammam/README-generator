// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    // Title (Enter project title)
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title!');
                return false;
            }
        }
    },
    // Description (Enter project description)
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },

    // Table of contents (Link to corresponding section)
    // {
    //     type: 'input',
    //     name: 'LiveUrl',
    //     message: 'Provide a link to your GitHub Reository:'
    //   },

    // Installation (Installation instructions)
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation information to continue!');
                return false;
            }
        }
    },
    // Usage (Usage information)
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use this project!');
                return false;
            }
        }
    },

        // Contribution Guidlines
        {
            type: 'input',
            name: 'contribution',
            message: 'How should people contribute to this project? (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You need to provide information on how to contribute to the project!');
                    return false;
                }
            }
        },

    // Liscence (List options, after selected display badge at top andnotice + explanation at bottom)
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        } 
    },
    // Tests (Test instructions)
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project!');
                return false;
            }
        }
    },
    // Questions (GitHub username - link to profile + instructions on how to reach out + additional questions)
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to provide your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile('README.md', generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();
