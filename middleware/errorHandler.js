// eslint-disable-next-line
import colors from 'colors';

const errorHandler = (err, req, res, next) => {
  console.log(`ERROR ====> ${err.message}`.bgRed.white);
  res.status(500).send('The server has encountered an error');
  next();
};

const notFoundHandler = (req, res, next) => {
  console.log(`NOT FOUND ====> ${req.originalUrl}`.bgBlue.black);
  res.status(404).send('The ressource was not found in this server');
  next();
};

export { errorHandler, notFoundHandler };
