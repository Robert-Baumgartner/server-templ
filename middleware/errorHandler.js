// eslint-disable-next-line
import colors from 'colors';
// eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
  console.log(`ERROR ====> ${err.message}`.bgRed.white);
  console.trace();
  res.status(500).send('The server has encountered an error');
};

const notFoundHandler = (req, res, next) => {
  console.log(`NOT FOUND ====> ${req.originalUrl}`.bgBlue.black);
  res.status(404).send('The ressource was not found in this server');
  next();
};

export { errorHandler, notFoundHandler };
