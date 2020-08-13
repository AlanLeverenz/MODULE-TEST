const keys = require('./myid');

const myidfunc = () => {
  return console.log('myid: ' + keys.ids.myid + ', yourid: ' + keys.ids.yourid);
};

myidfunc();
