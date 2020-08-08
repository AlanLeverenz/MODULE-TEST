// import('./myid');
require('dotenv').config();

// myid function
const myid = () => {
  let id = process.env.MY_ID;
  return console.log(`My ID is: ${id}`);
};

myid();
