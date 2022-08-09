//start listening on the specified port
const app = require('./app');

app.instance.listen(app.port, () => {
    console.log(`Server running on port ${app.port}`);
  });