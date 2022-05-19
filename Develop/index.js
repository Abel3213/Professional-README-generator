// TODO: Include packages needed for this application

const { basicQuestions, credit, resources } = require('./utils/questions')


// TODO: Create a function to initialize app
basicQuestions()
  .then(credit)
  .then(resources)
  .then(readmeData => {
    return generateReadme(readmeData);
  })





