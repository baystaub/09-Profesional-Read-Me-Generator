const fs = require("fs");
const inquirer = require("inquirer");

const README = (input) => `
# ${input.title}
${badge}
​
## Description
${input.description} 
​
## Table of Contents
1. Installations
2. Usages
3. Contributors
​
## Installations
${input.installation} 
​
## Usages
${input.usage} 
​
## Contributors
${input.contributors} 
​
## Testing the Application
${input.test} 

## Licenses
${input.license} 
​
​
​
## Any questions?
You are welcome to checkout my GitHub profile at: ${input.username}, Or email me at ${input.email} if you have any questions.`


const questions = [{
        type: 'input',
        message: 'Enter your project title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What Installations were used?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your Usage information here:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'How do you test your application?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Email they can use for any questions:',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What License did you use?',
        name: 'license',
        choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0', 'Mozilla Public License 2.0']
    }
];

function license() {
    inquirer.prompt(questions)
        .then((input) => {
            switch (input.license) {
                case 'MIT License':
                    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
                    break;

                case 'GNU General Public License v3.0':
                    badge = '![License: LGPLv3](https://img.shields.io/badge/License-LGPL%20v3-green.svg)'
                    break;

                case 'Apache License 2.0':
                    badge = '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
                    break;

                case 'Mozilla Public License 2.0':
                    badge = '![License: Mozilla Pub2.0](https://img.shields.io/badge/https://img.shields.io/badge/License-Mozilla%202.0-red.svg)'
                    break;

                default:
                    break;
            }
            fs.writeFile("ReadMe-Response.md", README({...input }), (error) =>
                error ? console.error(error) : console.log('Have a good Day!'))
        })
}

license();