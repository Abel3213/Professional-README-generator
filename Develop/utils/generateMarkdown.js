module.exports = templateData => {
  // destructure page data by section
  const { people, links, tableOfContents, ...info } = templateData;

  const generateToc = tableOfContentsTabs => {
    if (!tableOfContentsTabs) {
      return ``;
    }
    return `
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
      `
  };

  const generatePeople = peopleArr => {
    return `
        ${peopleArr
        .map(({ name, collabGithub }) => {
          return `
          .${name}

          .${collabGithub}
          `;
        })
        .join('')

      }
    `;
  };

  return `
# ${info.title}

## Description
${info.description}

## Table of Contents
${generateToc(tableOfContents)}

## Installation
${info.installation}

## Usage
${info.usage}

## Credits

-Collaborators
${generatePeople(people)}

-resources


## License

The last section of a high - quality README file is the license.This lets other developers know what they can and cannot do with your project.If you need help choosing a license, refer to[https://choosealicense.com/](https://choosealicense.com/).
  `;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

//

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(readmeData) {
//   return `
// # ${ readmeData.title }

// ## ${ readmeData.description }

// ## Table of Contents(Optional)

// ## ${ readmeData.installation }

// ## ${ readmeData.usage }

// ## Credits

//   .${ readmeData.people.name }

// .${ readmeData.people.collabGithub }

// .${ readmeData.links.credits }

// ## License

// The last section of a high - quality README file is the license.This lets other developers know what they can and cannot do with your project.If you need help choosing a license, refer to[https://choosealicense.com/](https://choosealicense.com/).

// `;
// }

// module.exports = generateMarkdown;
