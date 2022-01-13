const inquirer = require('inquirer');
// Global variable to allow fs module to work in the app.
//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

//const pageHTML = generatePage(name, github);

// FS Module that replaced the function call() & console.log().
//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));