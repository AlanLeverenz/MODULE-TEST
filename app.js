const keys = require('./mykeys');

const myidfunc = () => {
  return console.log('myid: ' + keys.ids.myid + ', yourid: ' + keys.ids.yourid);
};

myidfunc();
