const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const collegeRoutes = require('./Routes/collegeRoutes');
const studentRoutes = require('./Routes/studentRoutes');
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/college', collegeRoutes);
app.use('/api/v1/student', studentRoutes);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// app.all('*', (req, res, next) => {
//   res.status(404).json({
//     status: 'Error',
//     message: `Can't find the ${req.originalUrl} for this server`
//   });
// });

module.exports = app;
