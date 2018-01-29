const logConstructor = require('./logger');
const defaultLabel = 'LOG-MIDDLEWARE';

function recoverMiddleware(logLabel = defaultLabel) {
  const log = logConstructor(defaultLabel);
  return (err, req, res, next) => {
    log('error', err);
    res.sendStatus(500);
  }
}

function requestLogMiddleware(logLabel = defaultLabel) {
  const log = logConstructor(defaultLabel);
  return (req, res, next) => {
    const strFormat = `Request: ${req.ip} => ${req.method} | ${req.baseUrl}`;
    log('info', strFormat);
    next();
  }
}

module.exports = {
  recoverMiddleware,
  requestLogMiddleware,
};
