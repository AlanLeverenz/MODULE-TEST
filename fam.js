const chain = require('./famid');

const famfunc = () => {
  return console.log(
    'hisid: ' + chain.family.hisid + ', herid: ' + chain.family.herid
  );
};

famfunc();
