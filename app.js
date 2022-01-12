const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

/*
// Notice the lack of parentheses around the `profileDataArr` parameter. That's cause when there's only one argument to pass, you can omit parenthases. 
const printProfileData = profileDataArr => {
  // This loop...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  // just a divider
  console.log('================');

  // ^Is the same as this array method...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
  });

  // ^& this array method cleaned up...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

// Call
printProfileData(profileDataArgs);
*/

const generatePage = () => 'Name: Jane, Github: janehub';
console.log(generatePage());