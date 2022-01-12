const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

/* Function:
const generatePage = (username, githubName) => `Name: ${username}, Github: ${githubName}`;
*/
// ^^You can also write the function this way to create Multi-line Strings...
const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    GitHub: ${githubName}
  `;
};

// Call
console.log(generatePage('Jane', 'janehub'));