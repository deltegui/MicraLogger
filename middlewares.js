const logConstructor = require('./logger');
const defaultLabel = 'LOG-MIDDLEWARE';

function requestLogMiddleware(logLabel = defaultLabel) {
  const log = logConstructor(logLabel);
  return (req, res, next) => {
    const strFormat = `Request: ${req.ip} => ${req.method} | ${req.originalUrl}`;
    log.info(strFormat);
    next();
  }
}

module.exports = {
  requestLogMiddleware,
};
