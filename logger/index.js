const Logger = require('./logger');

const env = process.env.NODE_ENV;

let log;
if(env === 'production') log = new Logger('./app.log');
else log = new Logger();

function createLogWrapper(moduleName) {
  return (msg, method = 'info') => log[method](`(${moduleName}) ${msg}`);
}

function createLogMock() {
  return () => {};
}

module.exports = env === 'test' ? createLogMock : createLogWrapper;
