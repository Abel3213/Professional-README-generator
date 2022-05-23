// TODO: Include packages needed for this application
const { writeFile } = require('./utils/writefile')
const { basicQuestions, credit, resources, contactMe, license } = require('./utils/questions')
const generateReadme = require('./utils/generateMarkdown')



// TODO: Create a function to initialize app
basicQuestions()
  .then(credit)
  .then(resources)
  .then(license)
  .then(readmeData => {
    return generateReadme(readmeData);
  })
  .then(readMe => {
    return writeFile(readMe)
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });





