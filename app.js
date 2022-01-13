// Global variable to allow fs module to work in the app.
const fs = require('fs');
const generatePage = require('./src/page-template.js');
// Variable that holds the command-line arguments.
const profileDataArgs = process.argv.slice(2, process.argv.length);
// Combined two variables w/Assignment Destructuring, which assigns elements of an array to variable names in a single expression.
const [name, github] = profileDataArgs;

// FS Module that replaced the function call() & console.log().
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});