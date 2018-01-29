const Logger = require('./logger');

const env = process.env.NODE_ENV;

let log;
if(env === 'production') log = new Logger('./app.log');
else log = new Logger();

function createLogWrapper(moduleName) {
  const logCall = (method='info', msg) => log[method](`(${moduleName}) ${msg}`);
  return {
    info: msg => logCall('info', msg),
    warning: msg => logCall('warning', msg),
    error: msg => logCall('error', msg),
    success: msg => logCall('success', msg),
  }
}

function createLogMock() {
  return () => {};
}

module.exports = env === 'test' ? createLogMock : createLogWrapper;
