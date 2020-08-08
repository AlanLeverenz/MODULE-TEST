require('dotenv').config();

const myid = () => {
  let id = process.env.MY_ID;
  return console.log(`My ID is: ${id}`);
};

myid();
