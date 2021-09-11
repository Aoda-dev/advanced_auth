require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db.js');
const errorHandler = require('./middleware/error.js');

//connect db
connectDB();

const app = express();

app.use(express.json()); //allow to get data from body,

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

//error handler should be last piece of the middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`server running port: ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  //nicely error handler if server craashes
  console.log(`Logged error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
