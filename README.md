# MODULE-TEST

Test repo for using client-side modules using Browserify.

app.js is main JS file. 

Browserify CLI:
```
$ browserify app.js > bundle.js
```

Following code producing 'undefined' error from bundle.js file for id.

.env
```
MY_ID=12345
```

app.js
```
require('dotenv').config();

const myid = () => {
  let id = process.env.MY_ID;
  return console.log("My ID is: " + id);
};

myid();
```