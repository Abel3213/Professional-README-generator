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
            name: 'tableOfContents',
            message: 'Would you like to generate a table of contents?',
            default: true
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

module.exports = { basicQuestions, credit, resources };