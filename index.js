const loggerConstructor = require('./logger');
const loggerMiddlewares = require('./middlewares');

function enableUncaughtExceptionLogger() {
  process.on('uncaughtException', (err) => {
    const deathLog = loggerConstructor('DEATH MESSAGE').error;
    deathLog(`A fatal error happened. The error is: ${err}`, 'error');
    deathLog(`Stack Trace: ${err.stack}`, 'error');
    deathLog('This is a fatal error. The app will exit soon...', 'error');
    process.exit(1);
  });
}

module.exports = {
  logger: loggerConstructor,
  middlewares: loggerMiddlewares,
  enableUncaughtExceptionLogger,
};
