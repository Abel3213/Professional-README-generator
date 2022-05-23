const inquirer = require('inquirer');

const basicQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required):',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project? (Required):',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please make a installation guide for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use:',
            validate: uasgeInput => {
                if (uasgeInput) {
                    return true;
                } else {
                    console.log('Please enter instructions for the usage of your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCg',
            message: 'Would you like to add contribution guidelines?',
            default: false
        },
        {
            type: 'input',
            name: 'cg',
            message: 'Provide the contribution guidelines:',
            when: ({ confirmCg }) => {
                if (confirmCg) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTestInstructions',
            message: 'Would you like to add test instructions?',
            default: false
        },
        {
            type: 'input',
            name: 'ti',
            message: 'Provide test instructions:',
            when: ({ confirmTestInstructions }) => {
                if (confirmTestInstructions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tableOfContents',
            message: 'Would you like to generate a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your gitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your gitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'reachMe',
            message: 'How would you like people to reach you?',
            validate: reachMeInput => {
                if (reachMeInput) {
                    return true;
                } else {
                    console.log('Please enter your instructions on how to reach you!');
                    return false;
                }
            }
        }

    ]);
};



const credit = collaborators => {
    console.log(`
    =================
  
    Add a Collaborator!
  
    =================
    `);

    if (!collaborators.people) {
        collaborators.people = [];
    }

    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmCallab',
                message: 'Would you like to add a collaborator?',
                default: false
            },
            {
                type: 'input',
                name: 'name',
                message: 'Collaborators name: (Required)',
                when: ({ confirmCallab }) => {
                    if (confirmCallab) {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'collabGithub',
                message: 'Enter collaborators Github link: (Required)',
                when: ({ confirmCallab }) => {
                    if (confirmCallab) {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter a link the collaborators Github!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddCollab',
                message: 'Would you like to enter another collaborator?',
                default: false,
                when: ({ confirmCallab }) => {
                    if (confirmCallab) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(collabData => {
            collaborators.people.push(collabData);
            if (collabData.confirmAddCollab) {
                return credit(collaborators);
            } else {
                return collaborators;
            }
        });
};


const resources = creditLinks => {
    console.log(`
    =================
  
      Add Resources 
  
    =================
    `);

    if (!creditLinks.links) {
        creditLinks.links = [];
    }

    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmCredits',
                message: 'Would you like to link any resources used?',
                default: false
            },
            {
                type: 'input',
                name: 'credits',
                message: 'include a link to any tutorial or website you want to credit:',
                when: ({ confirmCredits }) => {
                    if (confirmCredits) {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: creditInput => {
                    if (creditInput) {
                        return true;
                    } else {
                        console.log('Please enter a link!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddLink',
                message: 'Would you like to enter another link?',
                default: false,
                when: ({ confirmCredits }) => {
                    if (confirmCredits) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(readmeData => {
            creditLinks.links.push(readmeData);
            if (readmeData.confirmAddLink) {
                return resources(creditLinks);
            } else {
                return creditLinks;
            }
        });
};

// const license = () => {
//     return inquirer.prompt([
//         {
//             type: 'checkbox',
//             name: 'license',
//             message: 'What license would you like to use?',
//             choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'jBSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
//         }
//     ]);
// };

module.exports = { basicQuestions, credit, resources, };
// license 
