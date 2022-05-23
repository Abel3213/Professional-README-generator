module.exports = templateData => {
  // destructure page data by section
  const { people, links, tableOfContents, ...info } = templateData;

  const generateToc = tableOfContentsTabs => {
    if (!tableOfContentsTabs) {
      return ``;
    }
    return `
- [Installation] (#installation)
- [Usage] (#usage)
- [Credits] (#credits)
- [License] (#license)
- [Ccontribution Guidelines] (#contribution guidelines)
- [Test Instructions] (#test instructions)
- [Questions/Contact Me] (#questions/contact me)
      `
  };

  const generateCg = cgText => {
    if (!cgText) {
      return '';
    }
    return `
## Contribution Guidelines
${cgText}
      `
  };

  const generateTi = tiText => {
    if (!tiText) {
      return '';
    }
    return `
## Test Instructions
${tiText}
      `
  };

  const generatePeople = peopleArr => {
    return `
        ${peopleArr
        .map(({ name, collabGithub }) => {
          return `
Name:${name}

Github:${collabGithub}
          `;
        })
        .join('')

      }
    `;
  };

  const generateLinks = linksArr => {
    return `
      ${linksArr
        .map(({ credits }) => {
          return `
${credits}
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

-Resources

${generateLinks(links)}

${generateCg(info.cg)}

${generateTi(info.ti)}

## Question/Contact Me

-Github 

${info.githubUser}

 https://github.com/${info.githubUser}

-Email

${info.email}

Reach out to me

${info.reachMe}

## License

  `;
};

// ${info.license}



