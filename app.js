// Variable that holds the command-line arguments.
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
/* ^^This combination aka Assignment Destructuring (assigns elements of an array to variable names in a single expression) can also be written as two separate variables...
const name = profileDataArgs[0];
const github = profileDataArgs[1];

const generatePage = (username, githubName) => `Name: ${username}, Github: ${githubName}`;
^^You can also write the function above this way to create Multi-line Strings...
*/
const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    GitHub: ${githubName}
  `;
};

// Call
console.log(generatePage(Name, github));