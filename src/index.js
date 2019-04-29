let express = require('express');

let app = express();

let path = require('path');

let cors = require('cors');

let bodyParser = require('body-parser');

let propertyRoute = require('./routes/property');

let projectRoute = require('./routes/project')

let userRoute = require('./routes/user')

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`${new Date().toString()} = ${req.originalUrl}`, req.body);
  next();
});

app.use(propertyRoute);

app.use(projectRoute);

app.use(userRoute);

app.use(express.static('public'));

app.use((req, res, next) => {
  res.status(404).send('We think you are lost');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
