// Variable that holds the command-line arguments.
const profileDataArgs = process.argv.slice(2, process.argv.length);
// Combined two variables w/Assignment Destructuring, which assigns elements of an array to variable names in a single expression.
const [name, github] = profileDataArgs;
const fs = require('fs');

// Function to dynamically generate HTML file.
const generatePage = (userName, githubName) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
      </head>

      <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
      </body>
    </html>
  `;
};

// FS Module that replaced the function call() & console.log().
fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});