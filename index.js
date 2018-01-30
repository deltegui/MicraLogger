const loggerConstructor = require('./logger');
const loggerMiddlewares = require('./middlewares');

function enableUncaughtExceptionLogger() {
  process.on('uncaughtException', (err) => {
    const deathLog = loggerConstructor('DEATH MESSAGE');
    deathLog.error(`A fatal error happened. The error is: ${err}`);
    deathLog.error(`Stack Trace: ${err.stack}`);
    deathLog.error('This is a fatal error. The app will exit soon...');
    process.exit(1);
  });
}

module.exports = {
  logger: loggerConstructor,
  middlewares: loggerMiddlewares,
  enableUncaughtExceptionLogger,
};
