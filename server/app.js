const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const globalErrorHandler = require('./controllers/errorController');
const candidateRouter = require('./routes/candidateRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(morgan('dev'));

app.use('/api/v1/candidates', candidateRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
