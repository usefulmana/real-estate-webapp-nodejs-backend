const express = require('express');

const app = express();

const path = require('path');

const cors = require('cors');

const bodyParser = require('body-parser');

const propertyRoute = require('./routes/property');

const projectRoute = require('./routes/project');

const userRoute = require('./routes/user');

const authRoute = require('./routes/auth');

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`${new Date().toString()} = ${req.originalUrl}`, req.body);
  next();
});

app.use(propertyRoute);

app.use(projectRoute);

app.use(userRoute);

app.use(authRoute);

app.use(express.static('public'));

app.use((req, res, next) => {
  res.status(404).send('We think you are lost');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
